// const axios = require('axios').default;
const loadBtn = document.querySelector(".js-load");
const loadBtnTwo = document.querySelector(".js-load-two");
const loadBtnThere = document.querySelector(".js-load-there");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const textData = (data) => { return`<div class="response-container">
    <img src="${data.avatar_url}">
    <p> Имя: <span>${data.name}</span><p>
    <p> О себе: <span>${data.bio}</span><p>
    <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
    </div>`
}


loadBtnTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  axios.get(`https://api.github.com/users/${searchValue}`)
  .then(resp => resp.data)
  .then(
    (data) => 
        (resultsContainer.innerHTML = textData(data))
  )
});

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();

  fetch(`https://api.github.com/users/${searchValue}`)
  .then(response => response.json())
  .then(
    (data) => 
        (resultsContainer.innerHTML = textData(data))
  )
});


loadBtnThere.addEventListener('click', (evt) => {
    evt.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    const reqest = new XMLHttpRequest();
    reqest.open('GET', `https://api.github.com/users/${searchValue}`);
    reqest.setRequestHeader ('Content-type', 'application/json');
    reqest.send();
    reqest.addEventListener('load', () => {
        const data = JSON.parse(reqest.response);
        resultsContainer.innerHTML = textData(data)
    })
})

