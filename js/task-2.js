// Make Array Function
function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
}

function handleMakeArray() {
    const array1 = document.getElementById('array1Input').value.split(',').map(item => item.trim());
    const array2 = document.getElementById('array2Input').value.split(',').map(item => item.trim());
    const maxLength = parseInt(document.getElementById('maxLengthInput').value, 10);
    const combinedArray = makeArray(array1, array2, maxLength);
    document.getElementById('makeArrayOutput').textContent = JSON.stringify(combinedArray);
}