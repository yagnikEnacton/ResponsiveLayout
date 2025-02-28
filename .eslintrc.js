module.exports = {
  root: true,
  extends: [
    '@react-native', // your existing base configuration
    'plugin:jest/recommended', // Add Jest plugin and recommended rules
  ],
  plugins: ['jest'],
  env: {
    jest: true, // Add Jest globals for testing files
  },
  rules: {
    'jest/expect-expect': 'off', // Disable the expect-expect rule
  },
};
