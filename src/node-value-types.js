const VALUE_TYPES = {
    // Native types:
    OBJECT: 1,
    ARRAY: 2,
    NUMBER: 3,
    BOOLEAN: 4,
    STRING: 5,
    // Custom types:
    DATETIME: 6,
    //ID: 7
    BINARY: 8,
    REFERENCE: 9
};

function getValueTypeName(valueType) {
    switch (valueType) {
        case VALUE_TYPES.ARRAY: return 'array';
        case VALUE_TYPES.BINARY: return 'binary';
        case VALUE_TYPES.BOOLEAN: return 'boolean';
        case VALUE_TYPES.DATETIME: return 'date';
        case VALUE_TYPES.NUMBER: return 'number';
        case VALUE_TYPES.OBJECT: return 'object';
        case VALUE_TYPES.REFERENCE: return 'reference';
        case VALUE_TYPES.STRING: return 'string';
        default: 'unknown';
    }
}

function getNodeValueType(value) {
    if (value instanceof Array) { return VALUE_TYPES.ARRAY; }
    else if (value instanceof PathReference) { return VALUE_TYPES.REFERENCE; }
    else if (value instanceof ArrayBuffer) { return VALUE_TYPES.BINARY; }
    else if (typeof value === 'string') { return VALUE_TYPES.STRING; }
    else if (typeof value === 'object') { return VALUE_TYPES.OBJECT; }
    throw new Error(`Invalid value for standalone node: ${value}`);
};

module.exports = { VALUE_TYPES, getValueTypeName, getNodeValueType };