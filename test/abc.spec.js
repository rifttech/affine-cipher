import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style

import {LatinAlphabet, Alphabet } from '../lib/abc';
describe('Alphabet', () => {
  describe('#getSize', () => {
    it('should return size=0', () => {
        let size = new Alphabet().size;
        assert.equal(0, size);
    });
  });

  describe('#getAlphabet', () => {
    it('should return empty string', () => {
      assert.equal('', new Alphabet().alphabet);
    });
  });
});


describe('Latin Alphabet', () => {
  describe('#getSize', () => {
    it('should return size=26', () => {
        let size = new LatinAlphabet().size;
        assert.equal(26, size);
    });
  });

  describe('#getAlphabet', () => {
    it('should return Latin Alphabet string', () => {
      assert.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ', new LatinAlphabet().alphabet);
    });
  });
});
