module.exports = {
    port: process.env.PORT || 3000,
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        hashes: {
            keyValueStoreHash: 'keyValueStore',
        },
        errorMessages: {
            keyEmptyMessage: `Key shouldn't be empty!`,
        },
    },
};
