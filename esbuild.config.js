const esbuild = require('esbuild');

const DEBUG_MODE = process.env.DEBUG_MODE === 'debug' ? true : false;

const esbuildOptionTypescript = {
  entryPoints: ['src/main.ts'],
  outfile: 'dist/main.js',
  bundle: true,
  minify: true,
  sourcemap: DEBUG_MODE,
  platform: 'browser',
};


esbuild.build(esbuildOptionTypescript);
