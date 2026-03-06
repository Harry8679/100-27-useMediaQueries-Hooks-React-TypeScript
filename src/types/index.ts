// Types pour media queries - AUCUN ANY

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Orientation = 'portrait' | 'landscape';

export interface BreakpointValues {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

export interface UseBreakpointReturn {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
  currentBreakpoint: Breakpoint;
}

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasTouch: boolean;
  hasHover: boolean;
  orientation: Orientation;
  prefersReducedMotion: boolean;
  prefersDarkMode: boolean;
}