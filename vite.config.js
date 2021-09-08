import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCss from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '~/':  `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    Pages(),
    AutoImport({
      imports:[
        'vue',
        'vue-router',
        '@vueuse/core',
      ]
    }),
    Components({
      resolvers:[
        IconsResolver({
          componentPrefix:'',
        }),
      ],
    }),
    Icons(),
    WindiCss(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
