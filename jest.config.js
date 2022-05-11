export default {
    preset: 'react-native',
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)',],
    transformIgnorePatterns: [
        'node_modules/(?!@react-native|react-native)'
      ],
      
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    // ...the rest of your config
    testEnvironment: 'jest-environment-node',
    transform: {},
    verbose: true
  }
  