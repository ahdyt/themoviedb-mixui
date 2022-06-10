import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
// add plugins like svelte() or vue() or react() if you are using them

export default defineConfig({
  plugins: [],
  // esbuild: {
  //   jsxInject: `import React from 'react'`
  // },
  publicDir: 'public'
})
