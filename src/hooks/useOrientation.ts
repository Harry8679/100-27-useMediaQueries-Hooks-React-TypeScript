import { useMediaQuery } from './useMediaQuery';
import { MEDIA_QUERIES } from '../constants/breakpoints';
import type { Orientation } from '../types';

export const useOrientation = (): Orientation => {
  const isPortrait = useMediaQuery(MEDIA_QUERIES.portrait);
  return isPortrait ? 'portrait' : 'landscape';
};