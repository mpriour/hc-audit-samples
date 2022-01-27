import {resolve} from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {host: true},
  rollupOptions: {
    input: {
      vanilla: resolve(__dirname, 'vanilla/index.html'),
      mui: resolve(__dirname, 'mui/index.html'),
      chakra: resolve(__dirname, 'chakra/index.html'),
      antd: resolve(__dirname, 'antd/index.html'),
      fluent: resolve(__dirname, 'fluent/index.html'),
      bootstrap: resolve(__dirname, 'bootstrap/index.html')
    }
  }
})
