module.exports = {
  preset: 'jest-expo',
  collectCoverageFrom: [
    'src/config/**/*.{ts,tsx}',
    'src/theme/**/*.{ts,tsx}',
    'src/utils/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.e2e.ts',
    '!src/**/index.ts',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/tests/e2e/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|lucide-react-native|nativewind)',
  ],
};
