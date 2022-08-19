const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: {
            import: './src-index/index.js', filename: './index/bundle.js'
        },
        login: {
            import: './src-login/index.js', filename: './login/bundle.js'
        },
        signup: {
            import: './src-signup/index.js', filename: './signup/bundle.js'
        }
    },
    watch: true
}

        