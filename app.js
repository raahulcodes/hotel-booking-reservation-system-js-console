
// creating a date variable
let date = new Date();

// creating an object with multiple bookings
let bookings = [
    {guest_name:"Rahul Sharma", booking_id:234, room_number: 313, check_in_date:new Date(2026,9,25), check_out_date:new Date(2026,9,29), no_of_guests:2, room_price:3500},
    {guest_name:"Disha Ratta", booking_id:233, room_number: 301, check_in_date:new Date(2026,9,22), check_out_date:new Date(2026,9,30), no_of_guests:2, room_price:4500}
];

let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = date.getDay();

// displaying all the check In bookings
console.log("-----------Bookings----------");
bookings.forEach(book=>
{
    console.log(book);
    book.check_in_date.setHours(11);
    book.check_in_date.setMinutes(30);
    book.check_in_date.setSeconds(0);
    console.log("-----Check-In Details-------");
    console.log("Year: " + book.check_in_date.getFullYear());
    console.log("Month: " + (book.check_in_date.getMonth()+1));
    console.log("Date: " + book.check_in_date.toLocaleDateString());
    console.log("Day: " + days[book.check_in_date.getDay()] );
    console.log("Hours: " + book.check_in_date.getHours());
    console.log("Minutes: " + book.check_in_date.getMinutes());
    console.log("Seconds: " + book.check_in_date.getSeconds());

    // calculating the number of nights to stay
    console.log("Total Nights to Stay: " + (book.check_out_date.getDate()-book.check_in_date.getDate()));
    
    // calculating the total room cost for given number of nights
    console.log("Total Room Cost: " + book.room_price*(book.check_out_date.getDate()-book.check_in_date.getDate()));

}
)

bookings.forEach(book=>
{
    book.check_out_date.setHours(12);
    book.check_out_date.setMinutes(30);
    book.check_out_date.setSeconds(0);
    console.log("-----Check-Out Details-------");
    console.log("Year: " + book.check_out_date.getFullYear());
    console.log("Month: " + (book.check_out_date.getMonth()+1));
    console.log("Date: " + book.check_out_date.toLocaleDateString());
    console.log("Day: " + days[book.check_out_date.getDay()] );
    console.log("Hours: " + book.check_out_date.getHours());
    console.log("Minutes: " + book.check_out_date.getMinutes());
    console.log("Seconds: " + book.check_out_date.getSeconds());

    // displaying the checkout details after updation
    if(book.check_out_date.getDate()===30)
    {
        
        console.log("Original Check-Out Date: " + book.check_out_date);
        updated_check_out_date = new Date(2026,10,3);
        let date_difference = (updated_check_out_date-book.check_in_date);
        let hours = 1000*60*60*24;
        console.log("Updated Checkout Date: " + updated_check_out_date);
        console.log("Original number of night stays: " + (book.check_out_date.getDate()-book.check_in_date.getDate()));
        console.log("Updated number of night stays: " + Math.floor(date_difference/hours));
        console.log("Additional Cost: " + updated_check_out_date.getDate()*(book.room_price));
    }

}
)


