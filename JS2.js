function printOddNumbers() {
    let start = Number(document.getElementById('startRange').value);
    let end = Number(document.getElementById('endRange').value);
    let oddNumbers = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }

    document.getElementById('oddResult').innerText = 'Odd Numbers: ' + oddNumbers.join(', ');
}