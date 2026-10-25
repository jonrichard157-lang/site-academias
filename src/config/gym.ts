import raw from '@gym';
import { content } from '@content';
import type { SiteContent } from '../content/types';
import { buildWhatsAppUrl } from '../lib/links';

export interface GymConfig {
  readonly name: string;
  readonly theme: { readonly accent: string; readonly ground: string; readonly ink: string; readonly accentInk?: string };
  readonly seo: { readonly title: string; readonly description: string; readonly siteUrl?: string; readonly image?: string };
  readonly brand?: { readonly logo?: string; readonly logoAspect?: number; readonly favicon?: string };
  readonly contact?: {
    readonly whatsapp?: string;
    readonly instagram?: string;
  };
}

export const GYM: GymConfig = raw;
export const CONTENT: SiteContent = content;

/** Link do WhatsApp com a mensagem pronta, ou null se a academia não tiver `contact.whatsapp`. */
export function whatsappUrl(message: string): string | null {
  return GYM.contact?.whatsapp ? buildWhatsAppUrl(GYM.contact.whatsapp, message) : null;
}

/** Converte um caminho relativo à pasta public da academia em URL. */
export function publicUrl(file: string): string {
  return `${import.meta.env.BASE_URL}${file}`;
}
