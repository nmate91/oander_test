const {
    convertBase64ToJSON,
    convertJSONToBase64,
} = require('../utils/base64Converter');

describe('base64converter tests', () => {
    test('should convert Base64 to JSON', () => {
        const base64Value =
            'eyJ0ZXN0IjoiYXNkIiwiaWQiOjEsImRldGFpbHMiOnsibGlzdCI6WyJhIiwxXSwiaXNWYWxpZCI6dHJ1ZX19';
        const result = convertBase64ToJSON(base64Value);
        expect(result).toEqual({
            test: 'asd',
            id: 1,
            details: {
                list: ['a', 1],
                isValid: true,
            },
        });
    });

    test('should convert JSON to Base64', () => {
        const result = convertJSONToBase64({
            test: 'asd',
            id: 1,
            details: {
                list: ['a', 1],
                isValid: true,
            },
        });
        expect(result).toEqual(
            'eyJ0ZXN0IjoiYXNkIiwiaWQiOjEsImRldGFpbHMiOnsibGlzdCI6WyJhIiwxXSwiaXNWYWxpZCI6dHJ1ZX19'
        );
    });
});
