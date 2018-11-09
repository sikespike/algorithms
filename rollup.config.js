import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

rollup({
  entry: './src/index.js',
  output: {
    format:'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
});