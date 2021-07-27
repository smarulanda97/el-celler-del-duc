module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  globalSetup: "<rootDir>/libs/jest/setupEnv.ts",
  setupFilesAfterEnv: ["<rootDir>/libs/jest/setupTest.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    /**
     * Path aliases
     */
    "^@libs/(.*)": "<rootDir>/libs/$1",
    "^@styles/(.*)": "<rootDir>/styles/$1",
    "^@mocks/(.*)": "<rootDir>/src/mocks/$1",
    "^@utils/(.*)": "<rootDir>/src/utils/$1",
    "^@pages/(.*)": "<rootDir>/src/pages/$1",
    "^@tests/(.*)": "<rootDir>/src/tests/$1",
    "^@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "^@contexts/(.*)": "<rootDir>/src/contexts/$1",
    "^@components/(.*)": "<rootDir>/src/components/$1",
    // "^@types-app/(.*)": "<rootDir>/types/$1",
    /**
     * Mocks
     */
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/mocks/fileMock.ts",
  },
  transform: {
    "^.+\\.css$": "<rootDir>/src/mocks/cssTransform.ts",
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
