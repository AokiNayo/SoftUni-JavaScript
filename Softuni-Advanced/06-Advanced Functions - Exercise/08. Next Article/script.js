function getArticleGenerator(articles) {
  let contentBlock = document.querySelector("#content");

  function createArticle() {
    if (articles.length > 0) {
      let article = document.createElement("article");
      let valueToReturn = articles.shift();
      article.textContent = valueToReturn;
      contentBlock.appendChild(article);
    }
  }

  return createArticle;
}
let test = [
  "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
  "A group of cats is called a clowder.",
  "Cats have over 20 muscles that control their ears.",
  "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
  "The world's largest cat measured 48.5 inches long.",
];
