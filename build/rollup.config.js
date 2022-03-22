/** rollup基本配置 */

/** 解析第三方的依赖包比如loadsh之类的 */
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** 路径别名处理 */
import alias from '@rollup/plugin-alias';

/** 解决第三方依赖commonjs(主要是element ui) */
import commonjs from '@rollup/plugin-commonjs'

/** 图片解析 */
import image from '@rollup/plugin-image';

/** 组件库名称 */
import { name } from '../package.json';

/** scss样式解析 */
import scss from 'rollup-plugin-scss';

/** 解析typescript */
import typescript from 'rollup-plugin-typescript2';

/** 解析vue组件 */
import vuePlugin from 'rollup-plugin-vue';
const file = (fileType) => `dist/${name}_${fileType}.js`;
const customResolver = resolve({
  extensions: ['.mjs', '.ts', '.js', '.jsx', '.json', '.sass', '.scss']
});
export { name, file };

export default {
  /** 入口文件 */
  input: './src/index.ts',
  /** 输出文件 */
  output: {
    name,
    file: `dist/test.js`,
    foramt: 'es'
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, '../src') }],
      customResolver,
    }),
    scss({ output: 'dist/bundle.css' }),
    vuePlugin({ css: true }),
    image(),
    typescript({
      /** 重新写入typescript配置信息 */
      tsconfigOverride: {
        compilerOptions: { declaration: true },
        include: ['main.ts'],
        exclude: ['App.vue', 'axios']
      }
    }),
    commonjs(),
    nodeResolve(),
  ],
  /** 打包时忽略 */
  external: ['axios', 'vue']
}