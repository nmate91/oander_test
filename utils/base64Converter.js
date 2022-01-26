const convertBase64ToJSON = (value) => {
    const stringJSON = Buffer.from(value, 'base64').toString('utf-8');
    return JSON.parse(stringJSON);
};

const convertJSONToBase64 = (value) => {
    const valueToSaveAsString = JSON.stringify(value);
    return Buffer.from(valueToSaveAsString).toString('base64');
};

module.exports = {
    convertBase64ToJSON,
    convertJSONToBase64,
};
