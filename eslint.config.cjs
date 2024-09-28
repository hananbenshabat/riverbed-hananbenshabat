const eslint = require('@eslint/js');
const tsEslint = require('typescript-eslint');
const ngEslint = require('angular-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = tsEslint.config(
    { ignores: ['.vscode/**', 'node_modules/**', 'dist/**'] },
    {
        files: ['**/*.js', '**/*.cjs'],
        languageOptions: { ecmaVersion: 2022, sourceType: 'commonjs' }
    },
    {
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended,
            ...tsEslint.configs.recommended,
            ...tsEslint.configs.stylistic,
            ...ngEslint.configs.tsRecommended
        ],
        processor: ngEslint.processInlineTemplates,
        rules: {
            '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
            '@angular-eslint/component-selector': ['error', { type: 'element', style: 'kebab-case' }],
            '@angular-eslint/directive-selector': ['error', { type: 'attribute', style: 'camelCase' }],
            '@angular-eslint/no-host-metadata-property': 'off',
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/explicit-function-return-type': 'error'
        }
    },
    {
        files: ['**/*.html'],
        extends: [...ngEslint.configs.templateRecommended, ...ngEslint.configs.templateAccessibility],
        rules: {
            '@angular-eslint/tempalte/elements-content': 'off',
            '@angular-eslint/template/prefer-self-closing-tags': ['error'],
            '@angular-eslint/template/no-autofocus': 'off'
        }
    },
    eslintConfigPrettier
);
