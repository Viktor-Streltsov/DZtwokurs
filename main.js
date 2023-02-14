// const num = document.querySelector('#num').value;
// const sub = document.querySelector('#sub');
// const block = document.querySelector('#text');

// sub.addEventListener('click', () => {
//     try{
//         if (num < 5 ) {
//             throw new Error("Нужно больше 5");
//         }else if (num > 10) {
//             throw new Error("Нужно меньше 10");
//         }else if (num === '') {
//             throw new Error("Строка пуста");
//         }
//     }
//     catch(e) {
//             block.innerHTML = e;
//     }
// })


// async function lottery() {
//     console.log("Вы начали игру");
//     let promise = await new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
//       }, 1000);
//     });
//     return promise;
//   }
  
//   lottery()
//     .then(() => console.log("Вы выиграли"))
//     .then(() => console.log("Вам заплатили"))
//     .catch(() => console.log("Вы проиграли"))
//     .finally(() => console.log("Игра закончена"));
  
;(function() {
    const num = document.querySelector('#num');
    const block = document.querySelector('#text');
    let count = 0;
    num.addEventListener('blur',function() {
            localStorage.setItem(`num${count}`,num.value);
            count++;
            if(count >= 3) {
                count = 4;
            };
      });
      const sub = document.querySelector('#sub');
      sub.addEventListener('click',function() {
        let num0 = localStorage.getItem(`num0`);
        let num1 = localStorage.getItem(`num1`);
        let num2 = localStorage.getItem(`num2`);
        block.textContent = Number(num0) + Number(num1) + Number(num2);
        localStorage.clear();
      });
})();

;(function() {
    let time = localStorage.getItem('time');
    let count = localStorage.getItem('count');
    let block = document.querySelector('#text');
    if(time === null) {
        let date = (new Date).getMinutes();
        localStorage.setItem('time', date);
        localStorage.setItem('count', 1);
        let cont = localStorage.getItem('count', count);
        block.textContent = `Вызашли на сайт ${cont} раз`;
    };
    if(time != null) {
        let dateTwo = (new Date).getMinutes();
        let firstMin = localStorage.getItem('time');
        let lastMin = dateTwo - firstMin;
        localStorage.setItem('twoTime',lastMin);
        count++;
        localStorage.setItem('count', count);
        block.textContent = `Вызашли на сайт ${count} раз`; 
    };
    if(count === 50) {
        localStorage.removeItem('count');
    };
})();

;(function() {
    let inp = document.querySelector('#inp');
    inp.addEventListener('blur',function() {
        localStorage.setItem('num', inp.value);
        inp.value = '';
    });
    // let date = new Date;
    // let Birsd = `${date.getDate()}.0${date.getMonth()+1}.${date.getFullYear()}`;
    // console.log(Birsd)
    // let dayBir = localStorage.getItem('birsd');
    // if(Birsd === dayBir) {
    //     console.log('hi')
    // }
    inp.value = localStorage.getItem('num');
});



;(function() {
    let inps = document.querySelectorAll('#elem');
    let btn = document.querySelector('#button');
    let arr = [];
    let count = 0;
    btn.addEventListener('click', function() {
        for(let elem of inps) {
            arr.push(elem.value);
        };
    let json = JSON.stringify(arr);
    localStorage.setItem('arrText', json);
    console.log(json);
    });
    let json = localStorage.getItem('arrText');
    let arrJson = JSON.parse(json);
    for(let elem of inps) {
        if(elem.value === undefined) {
            elem.value = '';
        }
    }
    try {
        for(let i = 0; i < inps.length; i++) {
            for(let j = 1; j < arrJson.length; j++) {
                inps[count].value = arrJson[count];
            };
            count++;
        };
        console.log('все хорошо')
    }catch (error) {
        console.log('массив не полный');
    };
    
});



;(function() {
    let infos = document.querySelectorAll('#info');
    let btn = document.querySelector('#but');
    let users = [
        {
            surname: 'surname1',
            name: 'name1',
            age: 31,
        },
        {
            surname: 'surname2',
            name: 'name2',
            age: 32,
        },
        {
            surname: 'surname3',
            name: 'name3',
            age: 33,
        },
    ];
    let json = JSON.stringify(users);
    localStorage.setItem('arr', json);
    btn.addEventListener('click', function() {
        let arr = [];
        let obj = {};
        for(let elem of infos) {
         arr.push(elem.value);
        };
        console.log(arr);
        obj.surname = arr[0];
        obj.name = arr[1];
        obj.age = Number(arr[2]);
        console.log(obj);
        let arrJson = localStorage.getItem('arr');
        let arrJ = JSON.parse(arrJson);
        console.log(arrJ);
        arrJ.push(obj);
        console.log(arrJ);
        let strArr = JSON.stringify(arrJ);
        localStorage.setItem('arr', strArr);
    });
    

});


;(function() {
    try {
        let str = ``;
        for (let i = 1; i <= 6 * 10 ** 6; i++) {
            str += '+';
        };
        localStorage.setItem('key', str);
        console.log('все хорошо');
    }catch (error) {
        console.log('лимит превышен');
    };

});


;(function() {
    let json = '[1,2,3,4,5]';
    let parent = document.querySelector('.wrapper');
    let arr = [];
    try{
        arr = JSON.parse(json);
    }catch (error) {
        console.log('JSON error');
    };
    let ul = document.createElement('ul');
        parent.append(ul);
        for(let elem of arr) {
            let li = document.createElement('li');
            li.textContent = elem;
            ul.append(li);
        };
})();

;(function() {
    let json = '[1,2,3,4,5]';
    let arr = [];
try {
    arr = JSON.parse(json);
    console.log('json коректен');
}catch (error) {
    console.log(error.name);
};
    let sum = 0;
for (let elem of arr) {
	sum += +elem;
}

})();

;(function() {
    let str = '';
    // for(let i = 0; i < 6 * 10 ** 6; i++) {
    //     str += 'a';
    // };
    // str = 'a';
    try{
        localStorage.setItem('str', str);
        console.log('коректно');
    }catch (error) {
        console.log(error.name);
        console.log(error.message);
    };
    
})();

// function div(a, b) {
// 	if (b !== 0) {
// 		return a / b;
// 	} else {
// 		throw new Error('ошибка деления на ноль');
// 	}
// }
// try {
// 	alert( div(3, 2) );
// } catch (error) {
// 	alert('вы пытаетесь делить на 0, что запрещено');
// }


// let result = Math.sqrt(-1);
// console.log(result);

function num(num) {
    if(num > 1) {
        let rez = Math.round(Math.sqrt(num));
        console.log(rez);
    }else {
        throw new Error('число меньше одного');
    };
}
try {
    num(3);
    console.log('все хорошо');
}catch (error) {
    console.log('число меньше 1');
};



try {
    throw new RangeError('ошибка блока');
}catch (error) {
    console.log(error.name);
    console.log(error.message);
};




















