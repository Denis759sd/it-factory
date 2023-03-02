module.exports = {
    apiVersion: 1,
    apiUri: '/api',
    port: process.env.PORT || 8000,
    host: process.env.HOST || '121.0.0.1',
    db: {
        username: '',
        password: '',
        dialect: 'postgres'
    }
}