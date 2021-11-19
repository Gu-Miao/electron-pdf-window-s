import path from 'path'

import clear from 'rollup-plugin-clear'

import pkg from './package.json'

/** @type import('rollup').RollupOptions */
const config = {
  input: path.join(__dirname, 'src/index.js'),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'auto',
      sourcemap: true,
    },
  ],
  external: ['path', 'electron', 'got', 'read-chunk'],
  plugins: [
    clear({
      targets: ['dist'],
    }),
  ],
}

export default config
