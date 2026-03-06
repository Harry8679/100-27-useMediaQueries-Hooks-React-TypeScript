import { useMediaQuery } from '../hooks';

export const FeatureDetectionDemo = () => {
  const hasHover = useMediaQuery('(hover: hover)');
  const hasPointer = useMediaQuery('(pointer: fine)');
  const hasCoarsePointer = useMediaQuery('(pointer: coarse)');
  const prefersContrast = useMediaQuery('(prefers-contrast: high)');
  const prefersTransparency = useMediaQuery('(prefers-reduced-transparency: reduce)');

  const features = [
    {
      name: 'Hover Support',
      value: hasHover,
      description: 'Peut survoler les éléments',
      icon: '🖱️',
      query: '(hover: hover)',
    },
    {
      name: 'Pointeur Précis',
      value: hasPointer,
      description: 'Souris ou trackpad',
      icon: '🖱️',
      query: '(pointer: fine)',
    },
    {
      name: 'Pointeur Tactile',
      value: hasCoarsePointer,
      description: 'Écran tactile',
      icon: '👆',
      query: '(pointer: coarse)',
    },
    {
      name: 'Contraste Élevé',
      value: prefersContrast,
      description: 'Préférence de contraste',
      icon: '🎨',
      query: '(prefers-contrast: high)',
    },
    {
      name: 'Transparence Réduite',
      value: prefersTransparency,
      description: 'Réduire la transparence',
      icon: '👁️',
      query: '(prefers-reduced-transparency: reduce)',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Détection de Fonctionnalités
      </h3>

      <div className="space-y-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className={`p-4 rounded-lg transition-all ${
              feature.value
                ? 'bg-green-100 dark:bg-green-900/20 border-2 border-green-500'
                : 'bg-gray-100 dark:bg-gray-700 border-2 border-transparent'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {feature.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  feature.value
                    ? 'bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                }`}
              >
                {feature.value ? '✓ Supporté' : '✗ Non supporté'}
              </span>
            </div>
            <div className="px-3 py-2 bg-gray-200 dark:bg-gray-600 rounded font-mono text-xs text-gray-700 dark:text-gray-300">
              {feature.query}
            </div>
          </div>
        ))}

        {/* Hover demo */}
        {hasHover && (
          <div className="p-6 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3">
              Démo Hover
            </h4>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white rounded-lg font-semibold transition-all">
              Survolez-moi !
            </button>
          </div>
        )}

        {/* Touch demo */}
        {hasCoarsePointer && (
          <div className="p-6 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3">
              Interface Tactile Optimisée
            </h4>
            <button className="w-full py-4 bg-purple-500 active:bg-purple-600 text-white rounded-lg font-bold text-lg">
              Touchez ici (cible plus large)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};