function printDeckOfCards(cards) {
  function createCard(face, suit) {
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
  
  let errorCard = ''
  let validCardArr = []
  try {
    cards.forEach(card => {
      let suit = card.slice(-1)
      let face = card.replace(suit, '')
      errorCard = `${face}${suit}`
      
      validCardArr.push(createCard(face, suit).toString())
    });
  } catch (error) {
    console.log(`Invalid card: ${errorCard}`)
    return
  }
  console.log(validCardArr.join(' '))
}

printDeckOfCards(['5S', '3D', 'QD', '1C'])
printDeckOfCards(['AS', '10D', 'KH', '2C'])

//Operator Mono Light