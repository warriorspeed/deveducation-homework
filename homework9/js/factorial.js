let factorailInput = document.getElementById('factorail__input');
let factorailBtn = document.getElementById('factorail-btn');
let factorailDisplay = document.getElementById('factorail-display');

const factorial = (el) =>{
    if(el == 0) return 1;
    if(el == 1) return el;
    else return  el * factorial(el-1);
};
factorailBtn.addEventListener('click', function () {
    let el = factorailInput.value;
    if (el === '') return factorailDisplay.innerHTML = 'Введите число'
    factorailDisplay.innerHTML = factorial(el);
});