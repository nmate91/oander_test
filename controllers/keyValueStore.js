const { logger } = require('../logger');

const getValueByKey = (req, res) => {
    const key = req.params.key;

    logger.info(key);

    res.sendStatus(200);
};

const createValueByKey = (req, res) => {
    const key = req.params.key;

    logger.info(key);

    res.sendStatus(201);
};

const deleteValueByKey = (req, res) => {
    const key = req.params.key;

    logger.info(key);

    res.sendStatus(201);
};

module.exports = {
    getValueByKey,
    createValueByKey,
    deleteValueByKey,
};
