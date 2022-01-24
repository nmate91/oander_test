const { getRedis } = require('./redis');
const redis = getRedis();
const config = require('../../config');

const hash = config.redis.hashes.keyValueStoreHash;
const keyEmptyMessage = config.redis.errorMessages.keyEmptyMessage;

const getValueByKey = (key) => {
    if (!key || !key.length) {
        logger.error(keyEmptyMessage);
        return;
    }
    return redis.hget(hash, key);
};

const createValueByKey = (key, value) => {
    if (!key || !key.length) {
        logger.error(keyEmptyMessage);
        return;
    }
    return redis.hset(hash, key, value);
};

const deleteValueByKey = (key) => {
    if (!key || !key.length) {
        logger.error(keyEmptyMessage);
        return;
    }
    return redis.hdel(hash, key);
};

module.exports = {
    getValueByKey,
    createValueByKey,
    deleteValueByKey,
};
