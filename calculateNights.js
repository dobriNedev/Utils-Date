function calculateNights(startDate, endDate) {
    let checkInDate = new Date(startDate);
    let checkOutDate = new Date(endDate);
    let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    return Math.round(Math.abs((checkInDate - checkOutDate) / oneDay));
}

let startDate = "2023-02-12";
let endDate = "2023-03-02";
let nights = calculateNights(startDate, endDate);
console.log("Nights booked:", nights);
console.log('Typeof nights:', typeof nights);
