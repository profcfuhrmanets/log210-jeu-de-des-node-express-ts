module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    coveragePathIgnorePatterns: ["index.ts","express-flash-plus.d.ts"],
    collectCoverageFrom: ["src/**/*.ts"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/dist/", "/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    setupFilesAfterEnv: ["jest-extended"],
};