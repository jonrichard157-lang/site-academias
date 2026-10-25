import type { GallerySlot } from '../content/types';
import styles from './MediaFrame.module.css';

interface MediaFrameProps {
  readonly slot: GallerySlot;
  readonly src: string | null;
  readonly onOpen?: () => void;
}

export function MediaFrame({ slot, src, onOpen }: MediaFrameProps) {
  if (!src) {
    return (
      <div
        className={styles.placeholder}
        role="img"
        aria-label={`Espaço reservado para foto: ${slot.caption}`}
      >
        <span className={styles.status}>Foto em breve</span>
        <span className={styles.label}>{slot.caption}</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.photo}
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-label={`Ampliar foto: ${slot.alt}`}
    >
      <img
        src={src}
        alt={slot.alt}
        width={1376}
        height={768}
        sizes="(min-width: 960px) 60vw, 100vw"
        loading="lazy"
        decoding="async"
        style={{ objectPosition: slot.objectPosition ?? '50% 50%' }}
      />
      <span className={styles.caption} aria-hidden="true">
        {slot.caption}
      </span>
    </button>
  );
}
