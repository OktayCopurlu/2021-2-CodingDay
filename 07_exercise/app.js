function reverseNumber(number) {
    let reverseNumber = number.toString().split('').reverse().join('');
    let parsedReverseNumber = Math.sign(number) * parseInt(reverseNumber);
    return console.log(parsedReverseNumber);
}
reverseNumber(-1000)