import { publicUrl } from '../config/gym';

/** URL da foto em gyms/<academia>/public/images, ou null se o arquivo ainda não foi adicionado. */
export function resolveImage(file: string): string | null {
  return __GYM_IMAGES__.includes(file) ? publicUrl(`images/${file}`) : null;
}
