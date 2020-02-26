console.log("getting into the test file");
const assert = require('chai').assert;
const UN = require('../BasicPrograms/username');
describe('Check username from UN', () => {
    it('should be greaterthan 3', () => {
        assert.equal(UN.username(), 'name');
    })
})