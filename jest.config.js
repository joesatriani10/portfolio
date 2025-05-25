// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // CSS modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        // Image files
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'app/components/**/*.{js,jsx}',
        '!**/*.module.css',
    ],
};

module.exports = createJestConfig(customJestConfig);
