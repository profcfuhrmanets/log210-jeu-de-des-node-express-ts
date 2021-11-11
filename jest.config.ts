/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  //  verbose: true,
  setupFilesAfterEnv: ["jest-extended/all"],
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: './tsconfig.json'
    }
  }
};
export default config;
