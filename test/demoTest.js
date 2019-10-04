const assert = require('assert');
const sumar = require('../app')

//afirmaciones (descriptor)

describe('Probar las sumas de numeros',()=>{
    it('Cinco mas cinco es diez', ()=>{
        assert.equal(10, sumar(5,5));
    });
    it('Cinco mas cinco no son veinte', ()=>{
        assert.equal(20, sumar(5,5));
    });
});