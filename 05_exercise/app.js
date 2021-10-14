const days = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"]

function getLastValue(array) {
    let alfabaticlyDays = days.sort()
    let lastElement = alfabaticlyDays[alfabaticlyDays.length - 1]
    return console.log(lastElement)
}
getLastValue(days)