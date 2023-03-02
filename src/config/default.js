module.exports = {
    apiVersion: 1,
    apiUri: '/api',
    port: process.env.PORT || 8000,
    host: process.env.HOST || '0.0.0.0',
    db: {
        username: 'postgres',
        password: 'postgres',
        dialect: 'postgres'
    }
}