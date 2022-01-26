const controller = require('../controllers/keyValueStore');
jest.mock('../services/redis.js');
jest.mock('../logger.js');

describe('keyValueStore controller', () => {
    test('should call res.status with 200 at getting a value, which is present in redis', async () => {
        const res = {
            status: jest.fn(),
        };

        jest.spyOn(res, 'status').mockImplementation((value) => ({
            send: jest.fn(),
            json: jest.fn(),
        }));

        const req = {
            params: {
                key: 'testKey',
            },
        };

        await controller.getValueByKey(req, res);

        expect(res.status).toBeCalledWith(200);
    });

    test('should call res.status with 404 at getting a value, which is not present in redis', async () => {
        const res = {
            status: jest.fn(),
        };

        jest.spyOn(res, 'status').mockImplementation((value) => ({
            send: jest.fn(),
            json: jest.fn(),
        }));
        const req = {
            params: {
                key: 'testKey2',
            },
        };

        await controller.getValueByKey(req, res);

        expect(res.status).toBeCalledWith(404);
    });

    test('should call res.status with 202 at setting a value', async () => {
        const res = {
            status: jest.fn(),
        };

        jest.spyOn(res, 'status').mockImplementation((value) => ({
            send: jest.fn(),
            json: jest.fn(),
        }));

        const req = {
            params: {
                key: 'testKey',
            },
            body: {
                test: 'asd',
                id: 1,
                details: {
                    list: ['a', 1],
                    isValid: true,
                },
            },
        };

        await controller.setValueByKey(req, res);

        expect(res.status).toBeCalledWith(202);
    });

    test('should call res.status with 202 at deleting a value', async () => {
        const res = {
            status: jest.fn(),
        };

        jest.spyOn(res, 'status').mockImplementation((value) => ({
            send: jest.fn(),
            json: jest.fn(),
        }));
        const req = {
            params: {
                key: 'testKey',
            },
        };

        await controller.deleteValueByKey(req, res);

        expect(res.status).toBeCalledWith(202);
    });

    test('should call res.status with 204 at deleting a value with a not existing key', async () => {
        const res = {
            status: jest.fn(),
        };

        jest.spyOn(res, 'status').mockImplementation((value) => ({
            send: jest.fn(),
            json: jest.fn(),
        }));
        const req = {
            params: {
                key: 'testKey2',
            },
        };

        await controller.deleteValueByKey(req, res);

        expect(res.status).toBeCalledWith(204);
    });
});
