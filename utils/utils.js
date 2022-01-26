const getErrorMessage = (error) => {
    return error.statusCode ? error.message : 'Server error';
};

module.exports = { getErrorMessage };
