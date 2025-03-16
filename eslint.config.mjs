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
    },
  },
]);
