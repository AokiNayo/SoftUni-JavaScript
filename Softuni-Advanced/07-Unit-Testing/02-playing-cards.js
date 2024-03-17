function playingCard(face, suit) {
  let cardSuits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  let cardFaces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  let generatedCard = {
    cardFace: face,
    cardSuit: suit,
    toString: function () {
      return `${this.cardFace}${cardSuits[suit].toString()}`;
    }
  }
  
  if (!(cardSuits.hasOwnProperty(suit) && cardFaces.includes(face))) {
    throw new Error
  }
  return generatedCard
}

let test = playingCard("1", "C");
console.log(test.toString());
test.toString();