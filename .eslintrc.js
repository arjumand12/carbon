module.exports = {
    extends: '@msdyn365-commerce/eslint-config',
    ignorePatterns: ['.eslintrc.js', '*.html', 'test/**', 'src/themes/**'],
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        },
        tsconfigRootDir: __dirname
    }
};