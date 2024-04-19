import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginJs.configs.recommended,
	eslintPluginPrettier,
	...tseslint.configs.recommended,
	pluginReactConfig,
];
