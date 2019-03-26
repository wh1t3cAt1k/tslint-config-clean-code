module.exports = {
    'defaultSeverity': 'error',
    'extends': [
        'tslint:recommended',
        'tslint-eslint-rules',
        'tslint-react',
        'tslint-sonarts',
        'tslint-microsoft-contrib',
        'tslint-consistent-codestyle',
        'tslint-no-circular-imports',
    ],
    'rules': {
        'arguments-order': true,
        'array-bracket-spacing': [
            true,
            'never'
        ],
        'arrow-parens': [
            true,
            'ban-single-arg-parens'
        ],
        'ban-comma-operator': true,
        'binary-expression-operand-order': false,
        'block-spacing': [
            true,
            'always'
        ],
        'brace-style': [
            true,
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'bool-param-default': false,
        'completed-docs': false,
        'early-exit': [
            true,
            {
                'max-length': 4
            }
        ],
        'encoding': true,
        'file-name-casing': [true, 'pascal-case'],
        'function-name': [
            true,
            {
                'function-regex': '^[a-z][\\w\\d]+$',
                'method-regex': '^[a-z][\\w\\d]+$',
                'private-method-regex': '^[a-z][\\w\\d]+$',
                'protected-method-regex': '^[a-z][\\w\\d]+$',
                'static-method-regex': '^[a-z][A-Za-z\\d]+$'
            }
        ],
        'handle-callback-err': [
            true,
            '^(err|error)$'
        ],
        'import-name': false,
        'increment-decrement': [true, 'allow-post'],
        'indent': [
            true,
            'spaces',
            4
        ],
        'interface-name': [
            true,
            'always-prefix'
        ],
        'jasmine-no-lambda-expression-callbacks': false,
        'jsx-boolean-value': [
            true,
            'never'
        ],
        'jsx-curly-spacing': [true, 'never'],
        'jsx-equals-spacing': [true, 'never'],
        'jsx-no-bind': true,
        'jsx-self-close': true,
        'jsx-space-before-trailing-slash': true,
        'jsx-wrap-multiline': true,
        'linebreak-style': false,
        'max-classes-per-file': [
            true,
            1,
            'exclude-class-expressions'
        ],
        'max-line-length': [
            true,
            100
        ],
        'member-access': [
            true,
            'check-accessor',
            'check-constructor'
        ],
        'missing-jsdoc': false,
        'mocha-no-side-effect-code': [
            true,
            {
                'ignore': 'nameof|createMockStore|it'
            }
        ],
        'naming-convention': [
            true,
            {
                'type': 'default',
                'format': 'camelCase',
                'leadingUnderscore': 'forbid',
                'trailingUnderscore': 'forbid'
            },
            {
                'type': 'variable',
                'format': 'camelCase'
            },
            {
                'type': 'variable',
                'modifiers': [
                    'global',
                    'const'
                ],
                'format': [
                    'camelCase',
                    'PascalCase'
                ]
            },
            {
                'type': 'variable',
                'modifiers': [
                    'export',
                    'const'
                ],
                'format': [
                    'camelCase',
                    'PascalCase'
                ]
            },
            {
                'type': 'member',
                'format': [
                    'camelCase',
                    'PascalCase'
                ]
            },
            {
                'type': 'type',
                'format': 'StrictPascalCase'
            },
            {
                'type': 'parameter',
                'modifiers': 'unused',
                'leadingUnderscore': 'allow'
            },
            {
                'type': 'interface',
                'prefix': 'I'
            },
            {
                'type': 'genericTypeParameter',
                'prefix': 'T'
            },
            {
                'type': 'enumMember',
                'format': 'PascalCase'
            }
        ],
        'newline-per-chained-call': true,
        'no-backbone-get-set-outside-model': false,
        'no-big-function': [true, 300],
        'no-boolean-literal-compare': true,
        'no-collapsible-if': true,
        'no-constant-condition': true,
        'no-control-regex': true,
        'no-dead-store': true,
        'no-default-import': true,
        'no-duplicate-imports': true,
        'no-empty-array': true,
        'no-ex-assign': true,
        'no-extra-boolean-cast': true,
        'no-extra-semi': true,
        'no-implicit-dependencies': [true, 'dev'],
        'no-inferrable-types': true,
        'no-inner-declarations': true,
        'no-invalid-regexp': true,
        'no-invalid-template-strings': true,
        'no-invalid-this': true,
        'no-invariant-return': true,
        'no-magic-numbers': [
            true,
            -1,
            0,
            1,
            0.5,
            2,
            3,
            4,
            5,
            24,
            42,
            43,
            48,
            60,
            100,
            666,
            1000,
            2000
        ],
        'no-multi-spaces': true,
        'no-namespace': true,
        'no-non-null-assertion': false,
        'no-null-keyword': true,
        'no-object-literal-type-assertion': false,
        'no-parameter-properties': true,
        'no-regex-spaces': true,
        'no-relative-imports': false,
        'no-require-imports': false,
        'no-static-this': true,
        'no-submodule-imports': [
            true,
            'redux-saga-test-plan/matchers',
            'redux-saga-test-plan/providers',
            'redux-saga/effects'
        ],
        'no-suspicious-comment': false,
        'no-trailing-whitespace': true,
        'no-unexpected-multiline': true,
        'no-unnecessary-callback-wrapper': false,
        'no-unnecessary-class': false,
        'no-unnecessary-else': true,
        'no-unnecessary-qualifier': true,
        'no-unsafe-any': false,
        'no-unused-expression': true,
        'no-use-before-declare': false,
        'no-useless-catch': true,
        'no-var-before-return': true,
        'no-void-expression': [
            true,
            'ignore-arrow-function-shorthand'
        ],
        'object-literal-sort-keys': false,
        'ordered-imports': true,
        'prefer-const-enum': false,
        'prefer-method-signature': true,
        /*
        In some cases we want to force the user to think about a prop and either
        explicitly pass a value or explicitly pass an undefined. Optional syntax
        would allow the user to omit the value altogether without any compiler warnings.
        */
        'prefer-optional': false,
        'quotemark': [
            true,
            'single',
            'avoid-escape',
            'avoid-template'
        ],
        'space-in-parens': true,
        'space-within-parens': [
            true,
            0
        ],
        'strict-boolean-expressions': true,
        'switch-default': true,
        'switch-final-break': false,
        'ter-arrow-body-style': [
            true,
            'as-needed'
        ],
        'ter-arrow-spacing': true,
        'ter-func-call-spacing': true,
        'ter-indent': [
            true,
            4,
            {
                'SwitchCase': 1
            }
        ],
        'ter-no-mixed-spaces-and-tabs': {
            'type': 'spaces'
        },
        'ter-no-proto': true,
        'ter-no-self-compare': true,
        'ter-no-sparse-arrays': true,
        'ter-no-tabs': true,
        'ter-padded-blocks': [
            true,
            'never'
        ],
        'trailing-comma': [
            true,
            {
                'multiline': {
                    'arrays': 'always',
                    'functions': 'never',
                    'objects': 'always',
                    'typeLiterals': 'ignore'
                },
                'singleline': 'never'
            }
        ],
        'triple-equals': true,
        'typedef': false,
        'underscore-consistent-invocation': false,
        'unnecessary-bind': true,
        'variable-name': false,
        // Deprecated
        // -
        'no-reserved-keywords': false,
        // Deprecated
        // -
        'no-function-constructor-with-string-args': false,
        // Deprecated
        // -
        'no-increment-decrement': false,
        // Deprecated
        // -
        'no-unnecessary-bind': false,
    }
}