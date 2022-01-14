// rollup.config.js
import { terser } from 'rollup-plugin-terser';

const devMode = (process.env.NODE_END === 'development');

export default [
  {
    input: 'src/js/scripts.js',
    output: {
      file: 'dist/src/js/scripts.js',
      format: 'iief',  //error in format IDK why
      sourcemap: devMode ? 'inline' : false,
      plugins: [terser()]
    },
  }
];