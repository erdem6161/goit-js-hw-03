// Filter Array Function
function filterArray(numbers, value) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            newNumbers.push(numbers[i]);
        }
    }
    return newNumbers;
}

function handleFilterArray() {
    const numbers = document.getElementById('filterArrayInput').value.split(',').map(Number);
    const value = parseInt(document.getElementById('filterValueInput').value, 10);
    const filteredArray = filterArray(numbers, value);
    document.getElementById('filterArrayOutput').textContent = JSON.stringify(filteredArray);
}