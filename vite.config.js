import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context: {
            user: {
                email: 'email@yandex.ru',
                login: 'anonymous',
                firstName: 'Аноним',
                secondName: 'Анонимов',
                displayName: '(V)O_O(V)',
                phone: '88005553535'
            }
        }
    })],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                signin: resolve(__dirname, 'src/pages/signin/signin.html'),
                profile: resolve(__dirname, 'src/pages/profile/profile.html'),
                changeProfile: resolve(__dirname, 'src/pages/profile/edit-profile.html'),
                changePassword: resolve(__dirname, 'src/pages/profile/edit-password.html'),
                chats: resolve(__dirname, 'src/pages/chats/chats.html'),
                fourHundred: resolve(__dirname, 'src/pages/errors/404.html'),
                fiveHundred: resolve(__dirname, 'src/pages/errors/500.html'),
                uploadAvatar: resolve(__dirname, 'src/pages/profile/upload-profile-avatar.html'),
            },
        },
    },
    server: {
        port: 3000
    },
})