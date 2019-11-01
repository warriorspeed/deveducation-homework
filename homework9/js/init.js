let recursivButton = document.getElementById('recursiv-btn')
let recursivDisplay = document.getElementById('recursiv-display')

recursivButton .addEventListener('click', function () {
recursivDisplay.innerHTML = count();
});

function makeCounter() {
    function counter() {
        return counter.currentCount++;
    };
    counter.currentCount = 1;
    return counter;
}

let count = makeCounter();

