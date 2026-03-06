import { useMediaQuery } from '../hooks';
import { MEDIA_QUERIES } from '../constants/breakpoints';

export const AdaptiveGridDemo = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Contenu Adaptatif
      </h3>

      <div className="space-y-6">
        {/* Adaptive content based on device */}
        {isMobile && (
          <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
            <div className="text-5xl mb-4">📱</div>
            <h4 className="text-2xl font-bold mb-2">Vue Mobile</h4>
            <p className="text-sm opacity-90">
              Contenu optimisé pour mobile avec navigation simplifiée et 
              éléments tactiles plus grands.
            </p>
            <div className="mt-4 space-y-2">
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Action Mobile 1
              </button>
              <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Action Mobile 2
              </button>
            </div>
          </div>
        )}

        {isTablet && (
          <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white">
            <div className="text-5xl mb-4">📱</div>
            <h4 className="text-2xl font-bold mb-2">Vue Tablette</h4>
            <p className="text-sm opacity-90 mb-4">
              Interface hybride combinant éléments tactiles et fonctionnalités avancées.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Action 1
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Action 2
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Action 3
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Action 4
              </button>
            </div>
          </div>
        )}

        {isDesktop && (
          <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white">
            <div className="text-5xl mb-4">💻</div>
            <h4 className="text-2xl font-bold mb-2">Vue Desktop</h4>
            <p className="text-sm opacity-90 mb-4">
              Interface complète avec toutes les fonctionnalités, navigation avancée 
              et raccourcis clavier.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Dashboard
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Analytics
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Settings
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Reports
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Users
              </button>
              <button className="py-3 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                Advanced
              </button>
            </div>
          </div>
        )}

        {/* Device comparison */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg text-center ${
            isMobile
              ? 'bg-blue-100 dark:bg-blue-900/20 border-2 border-blue-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-2xl mb-1">📱</div>
            <div className="font-bold text-gray-800 dark:text-white text-sm">
              Mobile
            </div>
          </div>

          <div className={`p-4 rounded-lg text-center ${
            isTablet
              ? 'bg-purple-100 dark:bg-purple-900/20 border-2 border-purple-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-2xl mb-1">📱</div>
            <div className="font-bold text-gray-800 dark:text-white text-sm">
              Tablette
            </div>
          </div>

          <div className={`p-4 rounded-lg text-center ${
            isDesktop
              ? 'bg-green-100 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-2xl mb-1">💻</div>
            <div className="font-bold text-gray-800 dark:text-white text-sm">
              Desktop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};