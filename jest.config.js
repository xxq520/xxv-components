module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{vue,js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{vue,js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    ".+\\.(png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx|css)$',
    // 转化axios依赖为commonjs格式
    '/!node_modules\\/axios/',
  ],
  moduleFileExtensions: [
    'vue',
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  resetMocks: true,
};