import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svg from 'vite-plugin-svgr'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'componentLib': path.resolve(__dirname, './src/componentLib'),
      'components': path.resolve(__dirname, './src/components'),
      'scss': path.resolve(__dirname, './src/scss'),
      'shared': path.resolve(__dirname, './src/shared'),
      'utils': path.resolve(__dirname, './src/utils'),
      'resources': path.resolve(__dirname, './src/resources'),
      'i18n': path.resolve(__dirname, './src/i18n'),
      'types': path.resolve(__dirname, './src/types'),
      // for aws sdk
      './runtimeConfig': './runtimeConfig.browser',
    }
  },
  plugins: [react(), svg({
  }) ]
})
