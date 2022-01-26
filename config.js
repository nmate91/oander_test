module.exports = {
    port: process.env.PORT || 3000,
    http: {
        errorMessages: {
            notFound: (key) => `Resource not found with key ${key}`,
        },
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-server',
        port: process.env.REDIS_PORT || 6379,
        hashes: {
            keyValueStoreHash: 'keyValueStore',
        },
        errorMessages: {
            keyEmptyMessage: `Key shouldn't be empty!`,
            valueNotFoundMessage: (key) => `Value not found for key ${key}!`,
        },
    },
};
