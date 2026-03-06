import { useBreakpoint } from '../hooks';

export const BreakpointDemo = () => {
  const { isSm, isMd, isLg, isXl, is2xl, currentBreakpoint } = useBreakpoint();

  const breakpoints = [
    { name: 'sm (≥640px)', active: isSm, size: '640px', color: 'red' },
    { name: 'md (≥768px)', active: isMd, size: '768px', color: 'orange' },
    { name: 'lg (≥1024px)', active: isLg, size: '1024px', color: 'yellow' },
    { name: 'xl (≥1280px)', active: isXl, size: '1280px', color: 'green' },
    { name: '2xl (≥1536px)', active: is2xl, size: '1536px', color: 'blue' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Breakpoint Detection
      </h3>

      <div className="space-y-6">
        {/* Current breakpoint */}
        <div className="p-6 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl text-white text-center">
          <div className="text-sm opacity-90 mb-2">Breakpoint actuel</div>
          <div className="text-5xl font-bold uppercase">{currentBreakpoint}</div>
        </div>

        {/* Breakpoints list */}
        <div className="space-y-3">
          {breakpoints.map((bp) => (
            <div
              key={bp.name}
              className={`p-4 rounded-lg transition-all ${
                bp.active
                  ? `bg-${bp.color}-100 dark:bg-${bp.color}-900/20 border-2 border-${bp.color}-500`
                  : 'bg-gray-100 dark:bg-gray-700 border-2 border-transparent opacity-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      bp.active ? `bg-${bp.color}-500` : 'bg-gray-400'
                    }`}
                  />
                  <span className="font-bold text-gray-800 dark:text-white">
                    {bp.name}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    bp.active
                      ? `bg-${bp.color}-200 dark:bg-${bp.color}-800 text-${bp.color}-700 dark:text-${bp.color}-300`
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {bp.active ? 'Actif' : 'Inactif'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Window size */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Largeur de fenêtre :
            </span>
            <span className="font-mono text-lg font-bold text-gray-800 dark:text-white">
              {typeof window !== 'undefined' ? window.innerWidth : 0}px
            </span>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Redimensionnez votre fenêtre pour voir les breakpoints s'activer en temps réel.
          </p>
        </div>
      </div>
    </div>
  );
};