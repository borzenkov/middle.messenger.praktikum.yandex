import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context: {
            username: 'Виктор'
        }
    })],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                signin: resolve(__dirname, 'src/pages/signin/signin.html'),
                profile: resolve(__dirname, 'src/pages/profile/profile.html'),
            },
        },
    },
    server: {
        port: 3000
    },
})