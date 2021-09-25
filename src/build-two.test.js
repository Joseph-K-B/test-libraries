const parseRequest = require('./build-two');
// const getMethod = require('../src/sandbox');

describe('parses request and logs the method', () =>{
    it('shows get method', () => {
        const method = parseRequest(`
GET / HTTP/1.1
Host: example.com
Accept-Language: us-en`);
        expect(method).toEqual({ 'method': 'GET' })
    });
    it('shows delete method', () => {
        const method = parseRequest(`
DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`);
        expect(method).toEqual({ 'method': 'DELETE' })
    });

});