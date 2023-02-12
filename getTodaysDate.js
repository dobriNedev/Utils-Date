function getTodaysDate() {
    let today = new Date().toISOString().split("T")[0];
    console.log(today);
    let checkIn = document.getElementById("checkIn");
    checkIn.min = today;

    let checkOut = document.getElementById("checkOut");
    
    checkIn.addEventListener("change", function() {
        let checkInDate = new Date(checkIn.value);
        checkOut.min = new Date(checkInDate.setDate(checkInDate.getDate() + 1)).toISOString().split("T")[0];
    });
}
