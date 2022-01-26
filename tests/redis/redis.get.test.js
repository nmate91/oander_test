jest.mock('../../logger.js');
jest.mock('ioredis');
const Redis = require('ioredis');
const redis = require('../../services/redis');

describe('redis get tests', () => {
    test('should throw error without init', () => {
        expect(() => {
            redis.getRedis();
        }).toThrow();
    });

    test('should get redis after init', () => {
        redis.initRedis();
        const redisInstance = redis.getRedis();
        expect(redisInstance).not.toBe(undefined);
    });
});
