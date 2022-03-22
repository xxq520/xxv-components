import plugin from '../plugin';
/** 局部引入按需引入 */
export const withInstall = (main: any) => {
  plugin(main);
  return main;
};
