import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import * as resolvers from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    uni(),
    Components({
      resolvers: [
        typeof resolvers.UviewPlusResolver === 'function'
          ? resolvers.UviewPlusResolver()
          : undefined
      ].filter(Boolean)
    })
  ]
})

