// svgo ./src/assets/svg/advisors-decoration-sm-grow-money.svg --config "./svgo.config.js"
// svgo ./public/logo-2.svg --config "./svgo.config.js" --multipass

export default {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true
  },
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    // 'cleanupIDs',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    // 'removeViewBox',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
    // 'cleanupListOfValues',
    'prefixIds',
    'sortAttrs',
    'removeDimensions'
    // 'removeOffCanvasPaths'
  ]
}
