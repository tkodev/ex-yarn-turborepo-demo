/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {resolve} = require('path');

const rootPaths = [resolve(__dirname), resolve(__dirname, '../..')];
const nodeModulesPaths = rootPaths.map(rootPath =>
  resolve(rootPath, 'node_modules'),
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: rootPaths,
  resolver: {
    nodeModulesPaths: nodeModulesPaths,
  },
};
