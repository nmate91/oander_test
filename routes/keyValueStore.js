const express = require('express');
const router = express.Router();
const {
    getValueByKey,
    setValueByKey,
    deleteValueByKey,
} = require('../controllers/keyValueStore');

const routePath = '/key-value-store';

router.get(`${routePath}/:key`, getValueByKey);
router.post(`${routePath}/:key`, setValueByKey);
router.delete(`${routePath}/:key`, deleteValueByKey);

module.exports = router;
