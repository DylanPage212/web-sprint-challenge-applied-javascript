import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  img.setAttribute("src", article.authorPhoto);

  headLine.textContent = article.headline;
  authorName.textContent = article.authorName;

  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);

  card.addEventListener("click", () => {
    console.log(headLine);
  })

  return card;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let articleEntry = document.querySelector(selector);

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    console.log(res);
    let bootstrap = res.data.articles.bootstrap;
    let javascript = res.data.articles.javascript;
    let jquery = res.data.articles.jquery;
    let node = res.data.articles.node;
    let technology = res.data.articles.technology;

    articleEntry.appendChild(Card(bootstrap[0]));
    articleEntry.appendChild(Card(bootstrap[1]));
    articleEntry.appendChild(Card(bootstrap[2]));
    articleEntry.appendChild(Card(javascript[0]));
    articleEntry.appendChild(Card(javascript[1]));
    articleEntry.appendChild(Card(javascript[2]));
    articleEntry.appendChild(Card(javascript[3]));
    articleEntry.appendChild(Card(jquery[0]));
    articleEntry.appendChild(Card(jquery[1]));
    articleEntry.appendChild(Card(jquery[2]));
    articleEntry.appendChild(Card(node[0]));
    articleEntry.appendChild(Card(node[1]));
    articleEntry.appendChild(Card(technology[0]));
    articleEntry.appendChild(Card(technology[1]));
    articleEntry.appendChild(Card(technology[2]));
  })
  .catch((err) => {
    console.log(err);
    });

}

export { Card, cardAppender }
