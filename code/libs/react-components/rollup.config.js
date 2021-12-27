import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: './lib/cjs/index.js',
      format: 'cjs',
    },
    {
      file: './lib/esm/index.js',
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      // eslint-disable-next-line no-undef
      typescript: require('typescript'),
    }),
  ],
};
