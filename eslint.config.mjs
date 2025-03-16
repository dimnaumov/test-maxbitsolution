import withNuxt from './.nuxt/eslint.config.mjs';
import * as tsParser from '@typescript-eslint/parser';
import pluginVue from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';

export default withNuxt([
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      'max-len': ['error', { code: 100 }],

      semi: ['error', 'always'],

      'comma-dangle': ['error', 'always-multiline'],

      'eol-last': ['error', 'always'],

      'vue/multi-word-component-names': 'off',

      'vue/attributes-order': ['error', {
        order: [
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'EVENTS',
          'CONTENT',
          'OTHER_ATTR',
        ],
        alphabetical: false,
      }],

      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],

      'vue/singleline-html-element-content-newline': ['error', {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: [],
      }],

      'vue/multiline-html-element-content-newline': ['error', {
        ignoreWhenEmpty: true,
        ignores: [],
        allowEmptyLines: false,
      }],

      'vue/html-indent': ['error', 2, {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
      }],

      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
      }],

      'indent': ['error', 2],
    },
  },
]);
