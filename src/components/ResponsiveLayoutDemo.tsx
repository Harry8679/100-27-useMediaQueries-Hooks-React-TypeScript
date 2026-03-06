import { useBreakpoint } from '../hooks';

export const ResponsiveLayoutDemo = () => {
  const { currentBreakpoint } = useBreakpoint();

  const getGridCols = () => {
    switch (currentBreakpoint) {
      case '2xl':
      case 'xl':
        return 4;
      case 'lg':
        return 3;
      case 'md':
        return 2;
      default:
        return 1;
    }
  };

  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: 'Description de l\'item',
  }));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Layout Responsive
      </h3>

      <div className="space-y-6">
        {/* Layout info */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Colonnes actuelles :
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {getGridCols()}
            </span>
          </div>
        </div>

        {/* Responsive grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${getGridCols()}, minmax(0, 1fr))` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl text-white hover:scale-105 transition-transform"
            >
              <div className="text-3xl font-bold mb-2">
                {item.id}
              </div>
              <div className="text-lg font-semibold mb-1">
                {item.title}
              </div>
              <div className="text-sm opacity-90">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Breakpoint guide */}
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h4 className="font-bold text-gray-800 dark:text-white mb-3">
            Guide des colonnes :
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Mobile (sm) :</span>
              <span className="font-semibold text-gray-800 dark:text-white">1 colonne</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Tablette (md) :</span>
              <span className="font-semibold text-gray-800 dark:text-white">2 colonnes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Desktop (lg) :</span>
              <span className="font-semibold text-gray-800 dark:text-white">3 colonnes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Large (xl, 2xl) :</span>
              <span className="font-semibold text-gray-800 dark:text-white">4 colonnes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};