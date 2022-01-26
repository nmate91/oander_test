const config = require('../../config');

const store = {};
store[config.redis.hashes.keyValueStoreHash] = {
    testKey:
        'eyJ0ZXN0IjoiYXNkIiwiaWQiOjEsImRldGFpbHMiOnsibGlzdCI6WyJhIiwxXSwiaXNWYWxpZCI6dHJ1ZX19',
};

const hget = async (hash, key) => {
    if (!store[hash]) {
        return null;
    }
    return store[hash][key];
};

const hset = async (hash, key, value) => {
    if (!store[hash]) {
        store[hash] = {};
    }
    store[hash][key] = value;
    return 1;
};

const hdel = async (hash, key) => {
    delete store[hash][key];
    return 1;
};

const redis = {
    hget,
    hset,
    hdel,
};

const getRedis = () => {
    return redis;
};

const initRedis = () => {};

module.exports = {
    initRedis,
    getRedis,
};
