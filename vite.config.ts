import {defineConfig, Plugin} from 'vite';
import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
            context: {
                login: {
                    inputs: [
                        {
                            type: 'text',
                            placeholder: 'Username',
                        },
                        {
                            type: 'password',
                            placeholder: 'Password',
                        },
                    ]
                }
            }
        }) as unknown as Plugin,
    ],

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                signup: resolve(__dirname, 'src/pages/signup/signup.html'),
            }
        }
    },
    server: {
        open: '/src/pages/login/login.html'
    }
});
