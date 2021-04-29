import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'

import sourceMaps from 'rollup-plugin-sourcemaps'
import livereload from 'rollup-plugin-livereload'

import { R, src, dist, publish } from './paths'

import pkgJson from '../package.json'

const libSrcName = 'lib/index.js'
const globalLibName = 'DemoLib'

const targetJS = 'js/lib.bundle.js'

export default {
  input: R(src, libSrcName),
  output: [
    {
      name: globalLibName,
      file: R(dist, targetJS),
      format: 'umd',
      sourcemap: true,
    },
  ],
  external: ['jquery', 'axios'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    sourceMaps(),
  ],
}
