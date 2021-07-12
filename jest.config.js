module.exports = {
  verbose: true,
  preset: "ts-jest",
  projects: [
    {
      displayName: "@bricksandbrackets/designsystem",
      globals: {
        "ts-jest": {
          tsconfig: "./tsconfig.jest.json"
        }
      },
      testMatch: ["<rootDir>/**/*?(*.)+(test).ts?(x)"],
      setupFiles: ["<rootDir>/config/jest/setupTests.js"],
      modulePathIgnorePatterns: ["<rootDir>/target"],
      coveragePathIgnorePatterns: ["<rootDir>/target", "<rootDir>/resources"],
      snapshotSerializers: ["enzyme-to-json/serializer"],
      transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "ts-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js"
      },
      moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      }
    }
  ]
};
