const withCSS = require('@zeit/next-css')

function resolve_db_host() {
    const system_username = require("os").userInfo().username.trim()
    console.log('system user:', system_username)
    if (system_username == 'docker' || system_username == 'node') {
        return process.env.DB_HOST
    } else { return 'localhost' }
}

module.exports = withCSS({
    target: 'serverless',
    env: {
        mongodbURL: `mongodb://${resolve_db_host()}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    },
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 3000,
            aggregateTimeout: 300,
        }
        return config
    }
})