import { useMediaQuery } from './useMediaQuery';
import { MEDIA_QUERIES } from '../constants/breakpoints';

export const usePrefersReducedMotion = (): boolean => {
  return useMediaQuery(MEDIA_QUERIES.reducedMotion);
};