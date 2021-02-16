import path from 'path';

import removeExport from './rollup-plugin-exp';    // Local Rollup plugin to remove named export from ESM bundle

// Basic directories paths. The `foundry.js` client code is bundled to `./public` in order to serve it via `http-server`
const s_CLIENT_PATH = './public';

// The deploy path for the server bundle which includes the common code.
const s_DEPLOY_PATH = './dist';

// Produce sourcemaps or not
const s_SOURCEMAP = true;

export default () =>
{
   // Reverse relative path from the deploy path to local directory; used to replace source maps path, so that it
   // shows up correctly in Chrome dev tools.
   const relativeClientPath = path.relative(`${s_CLIENT_PATH}`, '.');
   const relativeServerPath = path.relative(`${s_DEPLOY_PATH}`, '.');

   // This bundle is for the client.
   return [{
      input: ['src/client/index.js'],
      output: [{
         file: `${s_CLIENT_PATH}${path.sep}foundry-exp.js`,
         format: 'es',
         plugins: [removeExport()],
         preferConst: true,
         sourcemap: s_SOURCEMAP,
         sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativeClientPath, `.`)
      }]
   },

   // This bundle is for the server.
   {
      input: ['src/server/index.js'],
      output: [{
         file: `${s_DEPLOY_PATH}${path.sep}server-esm.js`,
         format: 'es',
         preferConst: true,
         sourcemap: s_SOURCEMAP,
         sourcemapPathTransform: (sourcePath) => sourcePath.replace(relativeServerPath, `.`)
      }]
   }];
};
