const Redis = require('ioredis');
const config = require('../config');
const { logger } = require('../logger');

let redis;

const initRedis = async () => {
    if (redis) {
        throw new Error('Redis already initialized!');
    }
    logger.info('Initializing redis...');
    redis = new Redis({ port: config.redis.port, host: config.redis.host });
};

const getRedis = () => {
    if (!redis) {
        throw new Error('Redis is not initialized! Call init first!');
    }
    return redis;
};

module.exports = {
    initRedis,
    getRedis,
};
