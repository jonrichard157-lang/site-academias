import type { ImageSlot } from '../data/images';
import styles from './MediaFrame.module.css';

interface MediaFrameProps {
  readonly slot: ImageSlot;
  readonly src: string | null;
  readonly onOpen?: () => void;
}

export function MediaFrame({ slot, src, onOpen }: MediaFrameProps) {
  if (!src) {
    return (
      <div
        className={styles.placeholder}
        role="img"
        aria-label={`Espaço reservado para foto: ${slot.placeholderLabel}`}
      >
        <span className={styles.status}>Foto em breve</span>
        <span className={styles.label}>{slot.placeholderLabel}</span>
      </div>
    );
  }

  return (
    <button type="button" className={styles.photo} onClick={onOpen} aria-haspopup="dialog">
      <img
        src={src}
        alt={slot.alt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: slot.objectPosition ?? '50% 50%' }}
      />
      {slot.caption ? <span className={styles.caption}>{slot.caption}</span> : null}
    </button>
  );
}
