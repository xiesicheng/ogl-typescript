import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts'];

export default [{
    input: './src/index.ts',
    external: [],
    plugins: [
        resolve({ extensions }),
        babel({ extensions, include: ['./src/**/*'] }),
    ],
    output: [
        { file: pkg.browser, format: 'es' },
        { file: pkg.browserMin, format: 'es', plugins: [terser()] },
        { file: pkg.unpkg, format: 'umd', name: 'ogl' },
    ],
    watch: {
        chokidar: {
            usePolling: true
        }
    }
}];
