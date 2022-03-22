/** 开发环境rollup配置 */

/** serve服务 */
import serve from 'rollup-plugin-serve';
/** 热更新 */
import livereload from 'rollup-plugin-livereload';
/** 替换环境 */
import replace from 'rollup-plugin-replace';
/** 基本的rollup配置 */
import baseConfig, { file, name } from './rollup.config';

/** 获取当前环境 */
const NODE_ENV = process.env.NODE_ENV;

baseConfig.plugins.push(
  serve({
    /** 根目录 */
    contentBase: './',
    /** 设置服务器 */
    host: 'localhost',  
    port: 8085,
  }),
  /** 监听文件夹(热更新) */
  livereload({ watch: 'dist/'}),
  /** 替换环境 */
  replace({'process.env.NODE_ENV': JSON.stringify(NODE_ENV)})
)
export default {
  ...baseConfig,
  /** 入口文件 */
  input: './src/pages/index.ts',
  output: {
    name,
    file: file('es'),
    format: 'es'
  },
  /** 打包时忽略, vue放开,开发时组件时需要将vue也打包进去 */
  external: ['axios']
};