module.exports = {
    apiVersion: 1,
    apiUri: '/api',
    port: process.env.PORT || 8000,
    address: 'it-factory.herokuapp.com',
    db: {
        username: '',
        password: '',
        dialect: 'postgres'
    }
}