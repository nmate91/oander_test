const { getRedis } = require('./redis');
const config = require('../../config');
const {
    BadRequestError,
    NotFoundError,
} = require('../../errors/keyValueStoreErrors');
const {
    convertBase64ToJSON,
    convertJSONToBase64,
} = require('../../utils/base64Converter');

const hash = config.redis.hashes.keyValueStoreHash;
const { keyEmptyMessage } = config.redis.errorMessages;

const getValueByKey = async (key) => {
    const redis = getRedis();

    if (!key || !key.length) {
        throw new BadRequestError(config.redis.errorMessages.keyEmptyMessage);
    }

    const value = await redis.hget(hash, key);
    if (value === undefined || value === null) {
        throw new NotFoundError(key);
    }
    const convertedValue = convertBase64ToJSON(value);

    return convertedValue;
};

const setValueByKey = async (key, value) => {
    const redis = getRedis();

    if (!key || !key.length) {
        throw new Error(keyEmptyMessage);
    }

    const b64ValueToSave = convertJSONToBase64(value);

    return redis.hset(hash, key, b64ValueToSave);
};

const deleteValueByKey = async (key) => {
    const redis = getRedis();

    if (!key || !key.length) {
        throw new Error(keyEmptyMessage);
    }
    return redis.hdel(hash, key);
};

module.exports = {
    getValueByKey,
    setValueByKey,
    deleteValueByKey,
};
