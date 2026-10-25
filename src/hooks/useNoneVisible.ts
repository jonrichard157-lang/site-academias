import { useEffect, useState } from 'react';

/**
 * true quando nenhuma das seções indicadas está visível na tela.
 * Usado para mostrar o botão flutuante só onde não há outro CTA de WhatsApp à vista.
 */
export function useNoneVisible(ids: readonly string[]): boolean {
  const [visible, setVisible] = useState<ReadonlySet<string>>(() => new Set(ids));
  const key = ids.join('|');

  useEffect(() => {
    const targets = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (targets.length === 0 || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible((previous) => {
          const next = new Set(previous);
          for (const entry of entries) {
            if (entry.isIntersecting) next.add(entry.target.id);
            else next.delete(entry.target.id);
          }
          return next;
        });
      },
      { rootMargin: '-15% 0px -15% 0px' },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [key]);

  return visible.size === 0;
}
