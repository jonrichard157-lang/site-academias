import { useState } from 'react';
import type { ImageSlot } from '../data/images';
import { resolveImage } from '../lib/images';
import { Lightbox } from './Lightbox';
import type { LightboxPhoto } from './Lightbox';
import { MediaFrame } from './MediaFrame';
import styles from './PhotoGrid.module.css';

interface PhotoGridProps {
  readonly slots: readonly ImageSlot[];
  readonly layout: 'equipment' | 'space';
}

interface ResolvedSlot {
  readonly slot: ImageSlot;
  readonly src: string | null;
}

export function PhotoGrid({ slots, layout }: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const resolved: readonly ResolvedSlot[] = slots.map((slot) => ({ slot, src: resolveImage(slot.file) }));
  const photos: LightboxPhoto[] = resolved.flatMap(({ slot, src }) =>
    src ? [{ src, alt: slot.alt, caption: slot.caption }] : [],
  );

  let photoIndex = -1;

  return (
    <>
      <div className={`${styles.grid} ${styles[layout]}`}>
        {resolved.map(({ slot, src }) => {
          if (src) photoIndex += 1;
          const index = photoIndex;
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
