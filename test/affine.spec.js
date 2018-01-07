import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import {LatinAlphabet} from '../lib/abc';
import AffineCipher from '../lib/index.js';

const plaintext = 'Js is awesome, man!';
describe('Affine Cipher', () => {
  describe('#cipher', () => {
    it('', () => {
      let a = 5, b = 8;
      let abc = new LatinAlphabet();
      //console.log(abc);
      let affineCipher = new AffineCipher(abc);
      //console.log(affineCipher);
      let ciphertext = affineCipher.cipher(plaintext, a, b);

      //console.log(ciphertext);
      assert.equal('Bu wu iocuaqc, qiv!',ciphertext);

    });
  });

  describe('#decipher', () => {
    it('', () => {
      let a = 5, b = 8;
      let abc = new LatinAlphabet();
      let affineCipher = new AffineCipher(abc);
      let ciphertext = affineCipher.cipher(plaintext, a, b);
      let text = affineCipher.decipher(ciphertext, a, b);
      assert.equal(plaintext, affineCipher.decipher(ciphertext, a, b));

    });
  });
});
