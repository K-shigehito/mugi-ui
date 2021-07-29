import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import ViteFonts from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: ['Quicksand'],
      },
    }),
  ],
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
