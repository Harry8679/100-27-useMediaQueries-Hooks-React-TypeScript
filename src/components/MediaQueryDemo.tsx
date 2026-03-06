import { BreakpointDemo } from './BreakpointDemo';
import { OrientationDemo } from './OrientationDemo';
import { ThemeDetectionDemo } from './ThemeDetectionDemo';
import { DeviceInfoDemo } from './DeviceInfoDemo';
import { ResponsiveLayoutDemo } from './ResponsiveLayoutDemo';
import { AdaptiveGridDemo } from './AdaptiveGridDemo';
import { FeatureDetectionDemo } from './FeatureDetectionDemo';

export const MediaQueryDemo = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            📱 useMediaQuery Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 27/100 • Responsive Design with React
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Détection de media queries et design adaptatif
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BreakpointDemo />
            <OrientationDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ThemeDetectionDemo />
            <DeviceInfoDemo />
          </div>

          {/* Row 3 - Full width */}
          <ResponsiveLayoutDemo />

          {/* Row 4 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <AdaptiveGridDemo />
            <FeatureDetectionDemo />
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Media Queries</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    API matchMedia native
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Breakpoints</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    sm, md, lg, xl, 2xl
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Orientation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Portrait/Landscape
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Détection automatique
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">SSR Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compatible Next.js
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Device Detection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mobile/Tablet/Desktop
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Feature Detection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hover, Touch, Pointer
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Accessibility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reduced motion, contrast
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">useMediaQuery :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useMediaQuery } from './hooks';

const isMobile = useMediaQuery('(max-width: 767px)');
const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
const isLandscape = useMediaQuery('(orientation: landscape)');

return (
  <div>
    {isMobile ? <MobileView /> : <DesktopView />}
  </div>
);`}
                </pre>
              </div>

              {/* Breakpoints */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">useBreakpoint :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useBreakpoint } from './hooks';

const { isMd, isLg, currentBreakpoint } = useBreakpoint();

return (
  <div className={currentBreakpoint === 'lg' ? 'grid-cols-3' : 'grid-cols-1'}>
    {/* Responsive grid */}
  </div>
);`}
                </pre>
              </div>

              {/* Orientation */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">useOrientation :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useOrientation } from './hooks';

const orientation = useOrientation();

return (
  <div className={orientation === 'portrait' ? 'flex-col' : 'flex-row'}>
    {/* Adaptive layout */}
  </div>
);`}
                </pre>
              </div>

              {/* Dark mode */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">usePrefersDarkMode :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { usePrefersDarkMode } from './hooks';

const prefersDark = usePrefersDarkMode();

useEffect(() => {
  document.documentElement.classList.toggle('dark', prefersDark);
}, [prefersDark]);`}
                </pre>
              </div>

              {/* Custom breakpoints */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Breakpoints personnalisés :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const isTablet = useMediaQuery(
  '(min-width: 768px) and (max-width: 1023px)'
);

const isRetina = useMediaQuery(
  '(min-resolution: 2dppx)'
);

const canHover = useMediaQuery('(hover: hover)');`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};