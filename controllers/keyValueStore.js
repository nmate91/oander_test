const { INTERNAL_SERVER, OK, ACCEPTED } = require('../errors/statusCodes.js');
const { logger } = require('../logger.js');

const keyValueStoreService = require('../services/redis/keyValueStore');

const getValueByKey = async (req, res) => {
    const key = req.params.key;
    try {
        const value = await keyValueStoreService.getValueByKey(key);
        logger.info(`${key} key found.`);
        return res.status(OK).json(value);
    } catch (err) {
        logger.error(err);
        res.status(err.status || INTERNAL_SERVER).json({
            message: err.message,
        });
    }
};

const setValueByKey = async (req, res) => {
    try {
        const key = req.params.key;
        const rawValue = req.body;

        await keyValueStoreService.setValueByKey(key, rawValue);
        logger.info(`${key} key set.`);

        res.status(ACCEPTED).send(`Successfully set with key ${key}`);
    } catch (err) {
        logger.error(err);
        res.status(err.status || INTERNAL_SERVER).json({
            message: err.message,
        });
    }
};

const deleteValueByKey = async (req, res) => {
    const key = req.params.key;
    try {
        await keyValueStoreService.deleteValueByKey(key);
        logger.info(`${key} key deleted.`);

        res.status(ACCEPTED).send(`Successfully deleted with key ${key}`);
    } catch (err) {
        logger.error(err);
        res.status(err.status || INTERNAL_SERVER).json({
            message: err.message,
        });
    }
};

module.exports = {
    getValueByKey,
    setValueByKey,
    deleteValueByKey,
};
