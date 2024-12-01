import globals from 'globals'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  // js
  js.configs.recommended,
  // ts
  ...ts.configs.recommended,
  // vue
  ...vue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
  // prettier
  prettier,
  {
    rules: {
      'prettier/prettier': 'off',

      'no-unused-vars': 'off',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 2 }],
      'indent': ['error', 2, {
        'SwitchCase': 1,
        'VariableDeclarator': { 'var': 1, 'let': 1, 'const': 1 },
        'outerIIFEBody': 1
      }],

      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],

      'vue/require-v-for-key': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/max-attributes-per-line': ['error', {
        'singleline': {
          'max': 4
        },
        'multiline': {
          'max': 1
        }
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'always'
      }],
      'vue/attribute-hyphenation': ['error', 'never', {
        'ignore': []
      }],
      'vue/html-indent': ['error', 2, {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': false,
        'ignores': []
      }],
      'vue/attributes-order': ['error', {
        'order': [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        'alphabetical': false
      }],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          'args': 'all',
          'argsIgnorePattern': '^_',
          'caughtErrors': 'all',
          'caughtErrorsIgnorePattern': '^_',
          'destructuredArrayIgnorePattern': '^_',
          'varsIgnorePattern': '^_',
          'ignoreRestSiblings': true
        }
      ]
    },
  },
  {
    ignores: ['dist', 'coverage', 'node_modules'],
  },
]