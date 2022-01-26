const express = require('express');
const app = express();
const router = require('./routes/keyValueStore');
const { logger } = require('./logger.js');
const config = require('./config');
const { initRedis } = require('./services/redis/redis');

initRedis()
    .then(() => {
        logger.info('Redis initialized! Starting server...');
        app.use(express.json());
        app.use('/', router);

        app.listen(config.port, () => {
            logger.info(`Server listening on port ${config.port}...`);
        });
    })
    .catch((err) => {
        logger.error(err);
    });

process.on('uncaughtException', (err) => {
    logger.error(err);
});
