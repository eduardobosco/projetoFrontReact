const Realm = require('realm');

const ContaSchema = {
    name: 'Conta',
    properties: {
        user: 'string',
        password: 'string',
    }
};

export default ContaSchema;