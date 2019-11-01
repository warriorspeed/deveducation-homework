let fibonacciDisplay = document.getElementById('fibonacci__display');
let fibonacciInput = document.getElementById('fibonacci__input');
let fibonacciBtn = document.getElementById('fibonacci__btn');

const fibonachi = (el) =>{
    if(el <= 1) return el;
    else return fibonachi(el-1) + fibonachi(el-2);

}


fibonacciBtn.addEventListener('click', function () {
    let el = fibonacciInput.value;
    if (el === '') return fibonacciDisplay.innerHTML = 'Введите число'
    fibonacciDisplay.innerHTML = fibonachi(el);
});

