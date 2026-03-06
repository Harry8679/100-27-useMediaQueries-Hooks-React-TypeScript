import { useMediaQuery, useOrientation, usePrefersDarkMode, usePrefersReducedMotion } from '../hooks';
import { MEDIA_QUERIES } from '../constants/breakpoints';
import type { DeviceInfo } from '../types';

export const DeviceInfoDemo = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const hasTouch = useMediaQuery(MEDIA_QUERIES.touch);
  const hasHover = useMediaQuery(MEDIA_QUERIES.hover);
  const orientation = useOrientation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersDarkMode = usePrefersDarkMode();

  const deviceInfo: DeviceInfo = {
    isMobile,
    isTablet,
    isDesktop,
    hasTouch,
    hasHover,
    orientation,
    prefersReducedMotion,
    prefersDarkMode,
  };

  const getDeviceType = () => {
    if (isMobile) return { type: 'Mobile', icon: '📱', color: 'blue' };
    if (isTablet) return { type: 'Tablette', icon: '📱', color: 'purple' };
    return { type: 'Desktop', icon: '💻', color: 'green' };
  };

  const device = getDeviceType();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Informations Appareil
      </h3>

      <div className="space-y-6">
        {/* Device type */}
        <div className={`p-6 bg-gradient-to-br from-${device.color}-500 to-${device.color}-600 rounded-xl text-white text-center`}>
          <div className="text-6xl mb-3">{device.icon}</div>
          <div className="text-3xl font-bold">{device.type}</div>
        </div>

        {/* Device capabilities */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg text-center ${
            deviceInfo.isMobile
              ? 'bg-blue-100 dark:bg-blue-900/20 border-2 border-blue-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-3xl mb-2">📱</div>
            <div className="font-bold text-gray-800 dark:text-white">Mobile</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {deviceInfo.isMobile ? '✓ Oui' : '✗ Non'}
            </div>
          </div>

          <div className={`p-4 rounded-lg text-center ${
            deviceInfo.isTablet
              ? 'bg-purple-100 dark:bg-purple-900/20 border-2 border-purple-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-3xl mb-2">📱</div>
            <div className="font-bold text-gray-800 dark:text-white">Tablette</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {deviceInfo.isTablet ? '✓ Oui' : '✗ Non'}
            </div>
          </div>

          <div className={`p-4 rounded-lg text-center ${
            deviceInfo.isDesktop
              ? 'bg-green-100 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-3xl mb-2">💻</div>
            <div className="font-bold text-gray-800 dark:text-white">Desktop</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {deviceInfo.isDesktop ? '✓ Oui' : '✗ Non'}
            </div>
          </div>

          <div className={`p-4 rounded-lg text-center ${
            deviceInfo.hasTouch
              ? 'bg-yellow-100 dark:bg-yellow-900/20 border-2 border-yellow-500'
              : 'bg-gray-100 dark:bg-gray-700 opacity-50'
          }`}>
            <div className="text-3xl mb-2">👆</div>
            <div className="font-bold text-gray-800 dark:text-white">Tactile</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {deviceInfo.hasTouch ? '✓ Oui' : '✗ Non'}
            </div>
          </div>
        </div>

        {/* Properties table */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  Orientation
                </td>
                <td className="px-4 py-3 text-right text-gray-800 dark:text-white capitalize">
                  {deviceInfo.orientation}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  Hover support
                </td>
                <td className="px-4 py-3 text-right text-gray-800 dark:text-white">
                  {deviceInfo.hasHover ? '✓ Oui' : '✗ Non'}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  Thème préféré
                </td>
                <td className="px-4 py-3 text-right text-gray-800 dark:text-white">
                  {deviceInfo.prefersDarkMode ? 'Sombre' : 'Clair'}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  Mouvement réduit
                </td>
                <td className="px-4 py-3 text-right text-gray-800 dark:text-white">
                  {deviceInfo.prefersReducedMotion ? 'Oui' : 'Non'}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  Largeur écran
                </td>
                <td className="px-4 py-3 text-right text-gray-800 dark:text-white font-mono">
                  {typeof window !== 'undefined' ? window.innerWidth : 0}px
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  Hauteur écran
                </td>
                <td className="px-4 py-3 text-right text-gray-800 dark:text-white font-mono">
                  {typeof window !== 'undefined' ? window.innerHeight : 0}px
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};