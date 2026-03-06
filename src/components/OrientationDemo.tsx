import { useOrientation } from '../hooks';

export const OrientationDemo = () => {
  const orientation = useOrientation();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Orientation Detection
      </h3>

      <div className="space-y-6">
        {/* Current orientation */}
        <div
          className={`p-8 rounded-xl text-white text-center ${
            orientation === 'portrait'
              ? 'bg-gradient-to-br from-purple-500 to-pink-600'
              : 'bg-gradient-to-br from-blue-500 to-cyan-600'
          }`}
        >
          <div className="text-6xl mb-4">
            {orientation === 'portrait' ? '📱' : '💻'}
          </div>
          <div className="text-3xl font-bold capitalize mb-2">
            {orientation}
          </div>
          <div className="text-sm opacity-90">
            {orientation === 'portrait' ? 'Mode vertical' : 'Mode horizontal'}
          </div>
        </div>

        {/* Orientation states */}
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`p-6 rounded-xl text-center transition-all ${
              orientation === 'portrait'
                ? 'bg-purple-100 dark:bg-purple-900/20 border-2 border-purple-500'
                : 'bg-gray-100 dark:bg-gray-700 opacity-50'
            }`}
          >
            <div className="text-4xl mb-2">📱</div>
            <div className="font-bold text-gray-800 dark:text-white mb-1">
              Portrait
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Hauteur {'>'} Largeur
            </div>
          </div>

          <div
            className={`p-6 rounded-xl text-center transition-all ${
              orientation === 'landscape'
                ? 'bg-blue-100 dark:bg-blue-900/20 border-2 border-blue-500'
                : 'bg-gray-100 dark:bg-gray-700 opacity-50'
            }`}
          >
            <div className="text-4xl mb-2">💻</div>
            <div className="font-bold text-gray-800 dark:text-white mb-1">
              Landscape
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Largeur {'>'} Hauteur
            </div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Largeur
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {typeof window !== 'undefined' ? window.innerWidth : 0}px
            </div>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Hauteur
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {typeof window !== 'undefined' ? window.innerHeight : 0}px
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Sur mobile/tablette : tournez votre appareil pour voir le changement d'orientation.
          </p>
        </div>
      </div>
    </div>
  );
};