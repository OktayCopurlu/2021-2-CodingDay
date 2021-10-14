let dayNumbers = [1, 7, 3, 4, 2];
let days = [];

function weekNumbersToWords(numbersArray) {
    for (let index = 0; index < numbersArray.length; index++) {
        const day = numbersArray[index];
        switch (day) {
            case 1:
                days.push("Monday");
                break;
            case 2:
                days.push("Tuesday");
                break;
            case 3:
                days.push(" Wednesday");
                break;
            case 4:
                days.push(" Thursday");
                break;
            case 5:
                days.push(" Friday");
                break;
            case 6:
                days.push("Saturday");
                break;
            case 7:
                days.push("Sunday");
                break;
            default:
                break;
        }
    }
    console.log(days)
}
weekNumbersToWords(dayNumbers);