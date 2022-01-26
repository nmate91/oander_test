const { INTERNAL_SERVER, OK, ACCEPTED } = require('../errors/statusCodes.js');
const { logger } = require('../logger.js');
const { getErrorMessage } = require('../utils/utils');

const keyValueStoreService = require('../services/keyValueStore');

const getValueByKey = async (req, res) => {
    const key = req.params.key;
    try {
        const value = await keyValueStoreService.getValueByKey(key);
        logger.info(`${key} key found.`);
        return res.status(OK).json(value);
    } catch (err) {
        logger.error(err);
        res.status(err.statusCode || INTERNAL_SERVER).json({
            message: getErrorMessage(err),
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
        res.status(err.statusCode || INTERNAL_SERVER).json({
            message: getErrorMessage(err),
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
        res.status(err.statusCode || INTERNAL_SERVER).json({
            message: getErrorMessage(err),
        });
    }
};

module.exports = {
    getValueByKey,
    setValueByKey,
    deleteValueByKey,
};
