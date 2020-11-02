module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    rules: {
        'no-nested-ternary': 'off',
        'no-plusplus': 'off',
        'react/prop-types': 0,
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/label-has-for': [
            2,
            {
                components: ['Label'],
                required: {
                    some: ['nesting', 'id'],
                },
                allowChildren: false,
            },
        ],
        'no-console': 'off',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                printWidth: 80,
            },
        ],
    },
};
