import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),            // Login
        painel: resolve(__dirname, 'painel/index.html'),    // Painel
        perfil: resolve(__dirname, 'perfil/index.html'),    // Perfil
        admin: resolve(__dirname, 'admin/index.html'),      // Admin
        cadastro: resolve(__dirname, 'cadastro/index.html') // Cadastro
      }
    }
  }
})