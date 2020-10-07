const Realm = require('realm');

// Define your models and their properties
const CriarConta = {
    name: 'Conta',
    properties: {
        usuario: 'string',
        senha: 'string',
    }
};

export default CriarConta;