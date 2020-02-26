const assert = require('chai').assert;
const HN = require('../BasicPrograms/harmonic');
describe("Harmonic", () => {
    it("should take integer only", () => {
        assert.equal(HN.getHarmonicNum(2), 1.5);
    });
    it("should not take decimal", () => {
        assert.equal(HN.getHarmonicNum(1.5), "undefined");
    });
    it("should not take character", () => {
        assert.equal(HN.getHarmonicNum("abcd"), "undefined");
    });
    it("should not take special symbol", () => {
        assert.equal(HN.getHarmonicNum("@#$%^&*"), "undefined");
    });

});