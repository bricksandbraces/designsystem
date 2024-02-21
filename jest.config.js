module.exports = {
  verbose: true,
  preset: "ts-jest",
  projects: [
    {
      displayName: "@bricksandbrackets/designsystem",
      testMatch: ["<rootDir>/**/*?(*.)+(test).ts?(x)"],
      modulePathIgnorePatterns: ["<rootDir>/target"],
      coveragePathIgnorePatterns: ["<rootDir>/target", "<rootDir>/resources"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          {
            tsconfig: "./tsconfig.jest.json"
          }
        ],
        "^.+\\.jsx?$": [
          "ts-jest",
          {
            tsconfig: "./tsconfig.jest.json"
          }
        ],
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js"
      },
      moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      }
    }
  ]
};
