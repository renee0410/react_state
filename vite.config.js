import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig((config) => {
  // Load env file based on `mode` in the current working directory.
  // https://main.vitejs.dev/config/#using-environment-variables-in-config
  const env = loadEnv(config.mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
