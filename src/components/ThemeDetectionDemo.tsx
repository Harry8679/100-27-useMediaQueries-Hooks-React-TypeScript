import { usePrefersDarkMode, usePrefersReducedMotion } from '../hooks';

export const ThemeDetectionDemo = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Préférences Système
      </h3>

      <div className="space-y-6">
        {/* Dark mode preference */}
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-3">
            Thème du système
          </h4>
          <div
            className={`p-6 rounded-xl text-white text-center ${
              prefersDarkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-yellow-400 to-orange-500'
            }`}
          >
            <div className="text-6xl mb-3">
              {prefersDarkMode ? '🌙' : '☀️'}
            </div>
            <div className="text-2xl font-bold mb-2">
              {prefersDarkMode ? 'Mode Sombre' : 'Mode Clair'}
            </div>
            <div className="text-sm opacity-90">
              prefers-color-scheme: {prefersDarkMode ? 'dark' : 'light'}
            </div>
          </div>
        </div>

        {/* Reduced motion preference */}
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-3">
            Préférence d'animation
          </h4>
          <div
            className={`p-6 rounded-xl text-white text-center ${
              prefersReducedMotion
                ? 'bg-gradient-to-br from-red-500 to-pink-600'
                : 'bg-gradient-to-br from-green-500 to-teal-600'
            }`}
          >
            <div className="text-6xl mb-3">
              {prefersReducedMotion ? '🚫' : '✨'}
            </div>
            <div className="text-2xl font-bold mb-2">
              {prefersReducedMotion ? 'Mouvement Réduit' : 'Animations Complètes'}
            </div>
            <div className="text-sm opacity-90">
              prefers-reduced-motion: {prefersReducedMotion ? 'reduce' : 'no-preference'}
            </div>
          </div>
        </div>

        {/* Animation demo */}
        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl">
          <h4 className="font-bold text-gray-800 dark:text-white mb-4 text-center">
            Démo d'animation
          </h4>
          <div className="flex justify-center">
            <div
              className={`w-16 h-16 bg-blue-500 rounded-full ${
                prefersReducedMotion ? '' : 'animate-bounce'
              }`}
            />
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            {prefersReducedMotion
              ? 'Animation désactivée (respect de prefers-reduced-motion)'
              : 'Animation activée'}
          </p>
        </div>

        {/* Usage example */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">
            💡 Comment tester ?
          </h4>
          <div className="text-sm text-blue-600 dark:text-blue-500 space-y-1">
            <p><strong>macOS :</strong> Préférences Système → Accessibilité → Affichage</p>
            <p><strong>Windows :</strong> Paramètres → Personnalisation → Couleurs</p>
            <p><strong>Mouvement réduit :</strong> Accessibilité → Affichage</p>
          </div>
        </div>
      </div>
    </div>
  );
};