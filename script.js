let counter = 0;

function modify(number) {
    const clicksHolder = document.getElementById('counter')
    const actionHolder = document.getElementById('action')
    counter += number;
    if (number == 0) counter = 0
    clicksHolder.innerHTML = counter;
    actionHolder.innerHTML = counter === 0 ? 'reset' : ''+ number
}