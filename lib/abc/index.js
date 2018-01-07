class Alphabet {
  constructor() {}

  get alphabet(){
    return "";
  }

  get size(){
    return 0;
  }
}

class LatinAlphabet extends Alphabet {
  constructor() {
    super();
    this.ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  get alphabet(){
    return this.ABC;
  }

  get size(){
    return this.ABC.length;
  }
}


module.exports = {LatinAlphabet, Alphabet};
