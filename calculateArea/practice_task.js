function result() {
    const grocery1 = parseFloat(document.getElementById('grocery1').value);
    const grocery2 = parseFloat(document.getElementById('grocery2').value);
    const grocery3 = parseFloat(document.getElementById('grocery3').value);

    document.getElementById('result').innerText = `The total amount is: ${calculateTotal(grocery1, grocery2, grocery3)}`;
}

function calculateTotal(a, b, c) {
    return a + b + c;
}