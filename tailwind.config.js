/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        colors: {
            base: {
                dark: '#090A0B',
                default: '#1C1F22',
                light: '#2E3338',
            },
            text: {
                dark: '#92CBDD',
                default: '#ADD8E6',
                light: '#D0E9F1',
            },
            'accent-mauve': '#8B687F',
            'accent-green': '#2A9134',
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
    },
}
