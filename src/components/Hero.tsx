import { Fragment, useEffect, useRef, useState } from 'react';
import { GYM, WHATSAPP_URL, publicUrl } from '../config/gym';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ButtonLink } from './ButtonLink';
import styles from './Hero.module.css';

export function Hero() {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState<boolean>(false);
  const playing = !reducedMotion && !userPaused;

  const hero = GYM.hero;
  const poster = hero?.poster ? publicUrl(hero.poster) : undefined;
  const videoSources = [
    hero?.videoWebm ? { src: publicUrl(hero.videoWebm), type: 'video/webm' } : null,
    hero?.videoMp4 ? { src: publicUrl(hero.videoMp4), type: 'video/mp4' } : null,
  ].filter((source): source is { src: string; type: string } => source !== null);
  const hasVideo = videoSources.length > 0;
  const hasMedia = hasVideo || poster !== undefined;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.play().catch(() => setUserPaused(true));
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <section id="topo" className={styles.hero} aria-labelledby="hero-title">
      {hasVideo ? (
        <video
          ref={videoRef}
          className={styles.media}
          poster={poster}
          aria-label={hero?.alt}
          muted
          loop
          playsInline
          preload="metadata"
        >
          {videoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : poster ? (
        <img className={styles.media} src={poster} alt={hero?.alt ?? ''} />
      ) : null}
      {hasMedia ? <div className={styles.scrim} aria-hidden="true" /> : null}

      {hasVideo ? (
        <button
          type="button"
          className={styles.toggle}
          aria-pressed={!playing}
          onClick={() => setUserPaused((value) => !value)}
          disabled={reducedMotion}
        >
          {playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        </button>
      ) : null}

      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {GYM.name.split(' ').map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              {index > 0 ? ' ' : null}
              <span className={styles.line} style={{ ['--delay' as string]: `${index * 90}ms` }}>
                {word}
              </span>
            </Fragment>
          ))}
        </h1>
        <div className={styles.row}>
          <p className={styles.tagline}>{GYM.tagline}</p>
          <div className={styles.actions}>
            <ButtonLink href="#estrutura" variant="outline">
              Conheça a academia
            </ButtonLink>
            {WHATSAPP_URL ? (
              <ButtonLink href={WHATSAPP_URL} external>
                Fale conosco
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
