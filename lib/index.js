import LatinAlphabet from './abc';

const isLetter = /^[a-zA-z]$/;
/**
 * E(x) = (ax + b) mod m
 * D(x) = a^-1 (x - b) mod m
 * m - alphabet size [0;m-1]
 * a and b are key of Cipher
 * a and m are coprime
 * a^-1 os modular multiplicative inverse of a modulo m
 * 1 = a * a^-1 mod m
 * coprime is gdc(a,b) = 1
 */

export default class AffineCipher {
  constructor(alphabet) {
    this._alphabet = alphabet;
  }


  cipher(text, a, b){
    return text.split('')
      .map(x => {
        if (x.match(isLetter)) {
          let index = ((a * this._alphabet.alphabet.indexOf(x.toUpperCase()) + b) % this._alphabet.size);
          let letter = this._alphabet.alphabet.charAt(index);
          return (isLowerCase(x)) ? letter.toLowerCase() : letter;
        }else {
          return x;
        }
       })
       .join('');
  }
  decipher(text, a, b){
    return text.split('')
      .map(x=>{
        if (x.match(isLetter)) {
            let m = this._alphabet.size;
            let char = this._alphabet.alphabet.indexOf(x.toUpperCase());
            let index = (m - a)  * (char - b + m) % m;
            let letter = this._alphabet.alphabet.charAt(index);
            return (isLowerCase(x)) ? letter.toLowerCase() : letter;
        }else {
          return x;
        }
      })
      .join('');
  }
}

function isLowerCase(c) {
  return c === c.toLowerCase();
}
