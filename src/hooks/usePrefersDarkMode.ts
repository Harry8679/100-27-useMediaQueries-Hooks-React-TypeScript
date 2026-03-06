import { useMediaQuery } from './useMediaQuery';
import { MEDIA_QUERIES } from '../constants/breakpoints';

export const usePrefersDarkMode = (): boolean => {
  return useMediaQuery(MEDIA_QUERIES.dark);
};