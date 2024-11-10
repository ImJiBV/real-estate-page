import path from "path"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      ...Object.keys(env).reduce((prev, key) => {
        prev[`process.env.${key}`] = JSON.stringify(env[key])
        return prev
      }, {}),
    },
    resolve: {
        alias: {
        "@": path.resolve(__dirname, "./src"),
        },
    },
  }
})