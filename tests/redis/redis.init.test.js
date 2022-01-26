jest.mock('../../logger.js');
jest.mock('ioredis');
const Redis = require('ioredis');
const redis = require('../../services/redis');

describe('redis init tests', () => {
    test('should initialize redis', () => {
        redis.initRedis();
        expect(Redis).toHaveBeenCalled();
    });

    test('should throw error on init redis', async () => {
        expect(redis.initRedis()).rejects.toThrow();
    });
});
