const roseprice = 8;
const lilyprice = 10;
const tulipsprice = 2;
let numberofrose = 70;
let numberoflily = 50;
let numberoftulips = 120;
let rosevalue = roseprice * numberofrose;
let lilyvalue = lilyprice * numberoflily;
let tulipvalue = tulipsprice * numberoftulips;
let total = rosevalue + lilyvalue + tulipvalue;

console.log("Rose - unit price:",roseprice,", quantity:",numberofrose,", value:",rosevalue);
console.log("Lily - unit price:",lilyprice,", quantity:",numberoflily,", value:",lilyvalue);
console.log("Tulips - unit price:",tulipsprice,", quantity:",numberoftulips,", value:",tulipvalue);
console.log("Total:",total)

numberofrose = numberofrose - 20;
numberoflily = numberoflily - 30;

rosevalue = roseprice * numberofrose;
lilyvalue = lilyprice * numberoflily;
tulipvalue = tulipsprice * numberoftulips;
total = rosevalue + lilyvalue + tulipvalue;

console.log("Rose - unit price:",roseprice,", quantity:",numberofrose,", value:",rosevalue);
console.log("Lily - unit price:",lilyprice,", quantity:",numberoflily,", value:",lilyvalue);
console.log("Tulips - unit price:",tulipsprice,", quantity:",numberoftulips,", value:",tulipvalue);
console.log("Total:",total)