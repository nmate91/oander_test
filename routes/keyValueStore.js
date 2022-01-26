const express = require('express');
const router = express.Router();
const {
    getValueByKey,
    createValueByKey,
    deleteValueByKey,
} = require('../controllers/keyValueStore');

const routePath = '/key-value-store';

router.get(`${routePath}/:key`, getValueByKey);
router.post(`${routePath}/:key`, createValueByKey);
router.delete(`${routePath}/:key`, deleteValueByKey);

module.exports = router;
