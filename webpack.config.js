const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: {
            import: './src/index.js', filename: '../dist/bundles/index.js'
        },
        login: {
            import: './src/login.js', filename: '../dist/bundles/login.js'
        },
        signup: {
            import: './src/signup.js', filename: '../dist/bundles/signup.js'
        },
        account: {
            import: './src/account.js', filename: '../dist/bundles/account.js'
        }
    },
    watch: true
}

        