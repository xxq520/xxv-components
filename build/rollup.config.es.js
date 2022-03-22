/** esm格式打包的配置 */

import baseConfig, { file, name } from './rollup.config';
export default {
  ...baseConfig,
  output: {
    name,
    file: file('es'),
    format: 'es'
  }
};