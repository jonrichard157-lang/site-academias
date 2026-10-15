import raw from '@gym';
import { buildWhatsAppUrl } from '../lib/links';

export interface GymConfig {
  readonly name: string;
  readonly tagline: string;
  readonly theme: { readonly accent: string; readonly ground: string; readonly ink: string; readonly accentInk?: string };
  readonly seo: { readonly title: string; readonly description: string };
  readonly brand?: { readonly logo?: string; readonly logoAspect?: number; readonly favicon?: string };
  readonly hero?: {
    readonly poster?: string;
    readonly videoWebm?: string;
    readonly videoMp4?: string;
    readonly alt?: string;
  };
  readonly contact?: {
    readonly whatsapp?: string;
    readonly whatsappMessage?: string;
    readonly instagram?: string;
  };
  readonly sections?: { readonly equipmentTitle?: string; readonly spaceTitle?: string };
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export const GYM: GymConfig = raw;

export const WHATSAPP_URL: string | null = GYM.contact?.whatsapp
  ? buildWhatsAppUrl(
      GYM.contact.whatsapp,
      GYM.contact.whatsappMessage ?? `Olá! Vim pelo site da ${GYM.name} e gostaria de mais informações.`,
    )
  : null;

export const SECTION_TITLES = {
  equipment: GYM.sections?.equipmentTitle ?? 'Estrutura e equipamentos',
  space: GYM.sections?.spaceTitle ?? 'Conheça o espaço',
} as const;

// Só entram links de seções que existem na página e de contatos que a academia tem.
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Espaço', href: '#espaco' },
  ...(GYM.contact?.instagram ? [{ label: 'Instagram', href: GYM.contact.instagram, external: true }] : []),
];

/** Converte um caminho relativo à pasta public da academia em URL. */
export function publicUrl(file: string): string {
  return `${import.meta.env.BASE_URL}${file}`;
}
