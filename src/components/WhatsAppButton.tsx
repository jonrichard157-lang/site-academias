import { whatsappUrl } from '../config/gym';
import type { WhatsAppCta } from '../content/types';
import { ButtonLink } from './ButtonLink';

interface WhatsAppButtonProps {
  readonly cta: WhatsAppCta;
  readonly trackId: string;
  readonly variant?: 'solid' | 'outline' | 'dark' | 'text';
  readonly size?: 'md' | 'lg';
  readonly icon?: boolean;
  readonly className?: string;
}

/** Botão que abre o WhatsApp com a mensagem do CTA. Não aparece se a academia não tiver WhatsApp. */
export function WhatsAppButton({ cta, trackId, variant, size, icon = true, className }: WhatsAppButtonProps) {
  const href = whatsappUrl(cta.message);
  if (!href) return null;
  return (
    <ButtonLink
      href={href}
      variant={variant}
      size={size}
      icon={icon ? 'whatsapp' : undefined}
      trackId={trackId}
      className={className}
      external
    >
      {cta.label}
    </ButtonLink>
  );
}
