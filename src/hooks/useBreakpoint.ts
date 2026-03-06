import { useMemo } from 'react';
import { useMediaQuery } from './useMediaQuery';
import { MEDIA_QUERIES } from '../constants/breakpoints';
import type { UseBreakpointReturn, Breakpoint } from '../types';

export const useBreakpoint = (): UseBreakpointReturn => {
  const isSm = useMediaQuery(MEDIA_QUERIES.sm);
  const isMd = useMediaQuery(MEDIA_QUERIES.md);
  const isLg = useMediaQuery(MEDIA_QUERIES.lg);
  const isXl = useMediaQuery(MEDIA_QUERIES.xl);
  const is2xl = useMediaQuery(MEDIA_QUERIES['2xl']);

  const currentBreakpoint = useMemo<Breakpoint>(() => {
    if (is2xl) return '2xl';
    if (isXl) return 'xl';
    if (isLg) return 'lg';
    if (isMd) return 'md';
    return 'sm';
  }, [isSm, isMd, isLg, isXl, is2xl]);

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    currentBreakpoint,
  };
};