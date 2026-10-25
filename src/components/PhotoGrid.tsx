import { useState } from 'react';
import type { GallerySlot } from '../content/types';
import { resolveImage } from '../lib/images';
import { Lightbox } from './Lightbox';
import type { LightboxPhoto } from './Lightbox';
import { MediaFrame } from './MediaFrame';
import styles from './PhotoGrid.module.css';

interface PhotoGridProps {
  readonly slots: readonly GallerySlot[];
}

interface ResolvedSlot {
  readonly slot: GallerySlot;
  readonly src: string | null;
}

export function PhotoGrid({ slots }: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const resolved: readonly ResolvedSlot[] = slots.map((slot) => ({ slot, src: resolveImage(slot.file) }));
  const photos: LightboxPhoto[] = resolved.flatMap(({ slot, src }) =>
    src ? [{ src, alt: slot.alt }] : [],
  );

  // Posição de cada foto na galeria ampliada (os espaços sem foto ficam de fora).
  const photoIndexes = resolved.map(({ src }, position) =>
    src ? resolved.slice(0, position).filter((item) => item.src).length : -1,
  );

  return (
    <>
      <div className={styles.grid}>
        {resolved.map(({ slot, src }, position) => {
          const index = photoIndexes[position];
          return (
            <div
              key={slot.file}
              className={styles.cell}
              data-area={slot.area}
              style={{ ['--aspect' as string]: slot.mobileAspect }}
            >
              <MediaFrame slot={slot} src={src} onOpen={() => setOpenIndex(index)} />
            </div>
          );
        })}
      </div>
      <Lightbox photos={photos} index={openIndex} onChange={setOpenIndex} />
    </>
  );
}
