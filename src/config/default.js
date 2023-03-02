module.exports = {
    apiVersion: 1,
    apiUri: '/api',
    port: process.env.PORT || 8000,
    address: process.env.ADDRESS || '3.216.88.24',
    db: {
        username: '',
        password: '',
        dialect: 'postgres'
    }
}