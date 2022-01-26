const IORedis = jest.genMockFromModule('ioredis');
IORedis.prototype.get.mockImplementation((key, callback) => {
    callback(null, IORedis.mockResponse.get.shift() || null);
});
module.exports = IORedis;
