import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import styles from './Lightbox.module.css';

export interface LightboxPhoto {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
}

interface LightboxProps {
  readonly photos: readonly LightboxPhoto[];
  /** Índice da foto aberta, ou null com a galeria fechada. */
  readonly index: number | null;
  readonly onChange: (index: number | null) => void;
}

export function Lightbox({ photos, index, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const photo = index !== null ? photos[index] : undefined;
  const total = photos.length;

  const go = (step: number): void => {
    if (index === null) return;
    onChange((index + step + total) % total);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>): void => {
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>): void => {
    if (event.target === event.currentTarget) onChange(null);
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label="Galeria de fotos"
      onClose={() => onChange(null)}
      onKeyDown={onKeyDown}
      onClick={onBackdropClick}
    >
      {photo ? (
        <>
          <img key={photo.src} className={styles.image} src={photo.src} alt={photo.alt} />
          <div className={styles.bar}>
            <p className={styles.count} aria-live="polite">
              {(index ?? 0) + 1} / {total}
            </p>
            {total > 1 ? (
              <div className={styles.nav}>
                <button type="button" className={styles.button} onClick={() => go(-1)}>
                  Anterior
                </button>
                <button type="button" className={styles.button} onClick={() => go(1)}>
                  Próxima
                </button>
              </div>
            ) : null}
            <button type="button" className={styles.button} onClick={() => onChange(null)}>
              Fechar
            </button>
          </div>
        </>
      ) : null}
    </dialog>
  );
}
