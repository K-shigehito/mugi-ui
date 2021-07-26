import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  build:
    process.env.NODE_ENV === 'development'
      ? {}
      : {
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'mugi-ui',
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
            },
          },
        },
});
