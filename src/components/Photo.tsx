import type { ImageRef } from '../content/types';
import { resolveImage } from '../lib/images';
import styles from './Photo.module.css';

interface PhotoProps {
  readonly image: ImageRef;
  readonly className?: string;
  /** Use em fotos do topo da página: carrega antes e sem lazy loading. */
  readonly priority?: boolean;
  readonly sizes?: string;
}

/** Foto da academia que preenche o contêiner. Sem o arquivo, mostra um espaço reservado. */
export function Photo({ image, className = '', priority = false, sizes = '100vw' }: PhotoProps) {
  const src = resolveImage(image.file);
  if (!src) {
    return (
      <div
        className={`${styles.frame} ${styles.placeholder} ${className}`}
        {...(image.alt ? { role: 'img', 'aria-label': `Espaço reservado para foto: ${image.alt}` } : { 'aria-hidden': true })}
      >
        <span>Foto em breve</span>
      </div>
    );
  }
  return (
    <img
      className={`${styles.frame} ${className}`}
      src={src}
      alt={image.alt}
      width={1376}
      height={768}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
    />
  );
}
