const num = document.querySelector('#num').value;
const sub = document.querySelector('#sub');
const block = document.querySelector('#texterror');

sub.addEventListener('click', () => {
    try{
        if (num < 5 ) {
            throw new Error("Нужно больше 5");
        }else if (num > 10) {
            throw new Error("Нужно меньше 10");
        }else if (num === '') {
            throw new Error("Строка пуста");
        }
    }
    catch(e) {
            block.innerHTML = e;
    }
})


async function lottery() {
    console.log("Вы начали игру");
    let promise = await new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
      }, 1000);
    });
    return promise;
  }
  
  lottery()
    .then(() => console.log("Вы выиграли"))
    .then(() => console.log("Вам заплатили"))
    .catch(() => console.log("Вы проиграли"))
    .finally(() => console.log("Игра закончена"));
  