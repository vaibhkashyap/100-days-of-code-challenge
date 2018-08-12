var d = new Date();
var day = d.getDay()
var dayName;
switch (day) {
    case 0:
        dayName = 'hi today is Sunday';
        break;
    case 1:
        dayName = 'hi today is Monday';
        break;
    case 2:
        dayName = 'hi today is Tuesday';
        break;
    case 3:
        dayName = 'hi today is Wednesday';
        break;
    case 4:
        dayName = 'hi today is Thursday';
        break;
    case 5:
        dayName = 'hi today is Friday';
        break;
    case 6:
        dayName = 'hi today is Saturday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(dayName);
