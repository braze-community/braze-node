import type { Config } from 'jest'

const config: Config = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters:
    process.env.CI === 'true' ? [['github-actions', { silent: false }], 'summary'] : undefined,
}

export default config
