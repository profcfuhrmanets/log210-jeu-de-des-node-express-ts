/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: "jest-environment-node",
  //  verbose: true,
  setupFilesAfterEnv: ["jest-extended/all"],
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: ["index.ts","express-flash-plus.d.ts"],

  globals: {
    'ts-jest': {
      diagnostics: true,
      isolatedModules: true,
      tsconfig: './tsconfig.json'
    }
  }
};
export default config;
