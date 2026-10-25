export function buildWhatsAppUrl(number: string, message: string): string {
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Registra o clique de um CTA no Google Tag Manager, se ele estiver instalado na página. */
export function trackCta(id: string): void {
  window.dataLayer?.push({ event: 'cta_click', cta_id: id });
}
