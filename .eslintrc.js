import js from '@eslint/js'
import globals from 'globals'

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.node
            }
        },
        rules: {
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                }
            ],
            "semi": [
                "error",
                "never"
            ],
            "quotes": [
                "error",
                "single",
                {
                    "allowTemplateLiterals": true
                }
            ]
        }
    }
]
