module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "ts-jest",
    "^.+\\.(ts|js)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!your-esm-package/.*)"],
};
