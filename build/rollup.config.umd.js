/** umd库格式打包配置 */

import baseConfig, { file, name } from './rollup.config';
export default {
  ...baseConfig,
  output: {
    name,
    file: file('umd'),
    format: 'umd',
    globals: {
      'vue': 'Vue',
      'axios': 'axios'
    }
  },

};