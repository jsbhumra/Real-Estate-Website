const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: {
            import: './src-index/index.js', filename: './index/bundle'
        },
        login: {
            import: './src-login/index.js', filename: './login/bundle'
        }
    },
    watch: true
}

            // entry: './src/index.js',
            // output: {
            //     path: path.resolve(__dirname, 'dist'),
            //     filename: 'bundle.js'