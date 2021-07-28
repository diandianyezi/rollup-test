// rollup.config.js
import json from 'rollup-plugin-json';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.iife.js',
        format: 'iife'
    },
    plugins: [
        json(),
        resolve(),
        commonjs(),
        typescript(),
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ],
    external: ['lodash']
};