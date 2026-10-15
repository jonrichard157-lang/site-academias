import { existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { HtmlTagDescriptor, Plugin } from 'vite';

interface GymJson {
  name?: string;
  theme?: { accent?: string; ground?: string; ink?: string; accentInk?: string };
  seo?: { title?: string; description?: string };
  brand?: { favicon?: string };
  hero?: { poster?: string };
}

const HEX = /^#[0-9a-f]{6}$/i;
const IMAGE_EXT = /\.(webp|avif|jpe?g|png)$/i;

function relativeLuminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const channel = (v: number): number => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** Escolhe texto escuro ou branco, o que tiver maior contraste sobre a cor de destaque. */
function readableInkOn(hex: string): string {
  const L = relativeLuminance(hex);
  const dark = '#0b0d0a';
  const contrastWithDark = (L + 0.05) / (relativeLuminance(dark) + 0.05);
  const contrastWithWhite = 1.05 / (L + 0.05);
  return contrastWithDark >= contrastWithWhite ? dark : '#ffffff';
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function loadGym(slug: string): { dir: string; gym: GymJson } {
  const dir = path.resolve(process.cwd(), 'gyms', slug);
  const file = path.join(dir, 'gym.json');
  if (!existsSync(file)) {
    const available = readdirSync(path.resolve(process.cwd(), 'gyms'), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .join(', ');
    throw new Error(`Academia "${slug}" não encontrada em gyms/. Disponíveis: ${available}`);
  }
  const gym = JSON.parse(readFileSync(file, 'utf-8')) as GymJson;
  const missing: string[] = [];
  if (!gym.name) missing.push('name');
  if (!gym.seo?.title || !gym.seo.description) missing.push('seo.title/seo.description');
  for (const key of ['accent', 'ground', 'ink'] as const) {
    if (!gym.theme?.[key] || !HEX.test(gym.theme[key])) missing.push(`theme.${key} (formato #rrggbb)`);
  }
  if (missing.length > 0) throw new Error(`gyms/${slug}/gym.json com campos inválidos: ${missing.join(', ')}`);
  return { dir, gym };
}

function gymHtml(gym: GymJson): Plugin {
  const theme = gym.theme as Required<Pick<NonNullable<GymJson['theme']>, 'accent' | 'ground' | 'ink'>> & {
    accentInk?: string;
  };
  const accentInk = theme.accentInk ?? readableInkOn(theme.accent);

  return {
    name: 'gym-html',
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [
        { tag: 'meta', attrs: { name: 'theme-color', content: theme.ground }, injectTo: 'head' },
        {
          tag: 'style',
          children: `:root{--color-ground:${theme.ground};--color-ink:${theme.ink};--color-accent:${theme.accent};--color-accent-ink:${accentInk};}`,
          injectTo: 'head',
        },
      ];
      tags.push({
        tag: 'link',
        attrs: { rel: 'icon', href: gym.brand?.favicon ? `/${gym.brand.favicon}` : 'data:,' },
        injectTo: 'head',
      });
      if (gym.hero?.poster) {
        tags.push({ tag: 'meta', attrs: { property: 'og:image', content: `/${gym.hero.poster}` }, injectTo: 'head' });
      }
      const out = html
        .replaceAll('%GYM_TITLE%', escapeHtml(gym.seo?.title ?? ''))
        .replaceAll('%GYM_DESCRIPTION%', escapeHtml(gym.seo?.description ?? ''))
        .replaceAll('%GYM_NAME%', escapeHtml(gym.name ?? ''));
      return { html: out, tags };
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // `--mode <academia>` (ou GYM=<academia>) escolhe a pasta em gyms/. Sem isso, usa "demo".
  const slug = process.env.GYM ?? (mode === 'development' || mode === 'production' ? 'demo' : mode);
  const { dir, gym } = loadGym(slug);
  const publicDir = path.join(dir, 'public');
  mkdirSync(path.join(publicDir, 'images'), { recursive: true });
  const images = readdirSync(path.join(publicDir, 'images')).filter((file) => IMAGE_EXT.test(file));

  return {
    plugins: [react(), gymHtml(gym)],
    publicDir,
    resolve: { alias: { '@gym': path.join(dir, 'gym.json') } },
    define: { __GYM_IMAGES__: JSON.stringify(images) },
    build: { outDir: path.resolve(process.cwd(), 'dist', slug), emptyOutDir: true },
  };
});
