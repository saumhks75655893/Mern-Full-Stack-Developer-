// // // Q44 -> Guess the result
// /*

// let date = new Date(0);
// console.log(date);
// */
// ***************************************************************************************

// let date = new Date();
// console.log(date);
// console.log(date.toLocaleString());

// ***************************************************************************************
// // Q45 -> Validate that a user's selected date range is no longer than 30 days.
// *************************************************************************************

// let nowDate = new Date("2025-07-20T00:00:00.000Z");
// let userDate = new Date("2025-07-20");
// let diff = nowDate - userDate;
// let numOfDays = Math.floor(diff / 1000 / 60 / 60 / 24);

// console.log();
// if (numOfDays > 30) {
//   console.log("Date khatm ho chuka hai, abhi tak kah the ap...!");
// } else {
//   console.log("Congratulations! You from have been submitted...");
// }
// console.log();

// ***************************************************************************************
// // // Q46 -> Calculate the difference between two dates in the form of "_year_month_days_hours_minutes_sec".
// ***************************************************************************************

// let date1 = "2022-01-10T12:02:50Z";
// let date2 = "2025-05-20T02:02:40Z";

// console.log();
// function takeDifference(date1, date2) {
//   let startDate = new Date(date1);
//   let endDate = new Date(date2);

//   // difference
//   let diff = (endDate - startDate) / 1000;
//   // years
//   let year = Math.floor(diff / (60 * 60 * 24 * 365));

//   // difference update
//   diff = diff % (60 * 60 * 24 * 365);
//   // months
//   let month = Math.floor(diff / (60 * 60 * 24 * 30));

//   // difference update
//   diff = diff % (60 * 60 * 24 * 30);
//   // days
//   let day = Math.floor(diff / (60 * 60 * 24));

//   // difference update
//   diff = diff % (60 * 60 * 24);
//   // hours
//   let hour = Math.floor(diff / (60 * 60));

//   // difference update
//   diff = diff % (60 * 60);
//   // minutes
//   let minute = Math.floor(diff / 60);

//   // difference update (seconds)
//   let sec = Math.floor(diff % 60);

//   // output in the format expected
//   console.log(
//     `${year} years ${month} months ${day} days ${hour} hours ${minute} minutes ${sec} seconnds`,
//   );
// }

// takeDifference(date1, date2);

// console.log();

// console.log();

// // method -2 : ------------
// ***************************************************************************************

// import { DateTime } from "../13_50_QUESTIONS_FOR_REVISION/node_modules/luxon/build/es6/luxon.js";

// let date1 = "2022-01-10T12:02:50.345Z";
// let date2 = "2025-05-20T02:02:40.634Z";

// console.log();
// function takeDifference(date1, date2) {
//   let startDate = DateTime.fromISO(date1);
//   let endDate = DateTime.fromISO(date2);

//   let diff = endDate.diff(startDate, [
//     "years",
//     "months",
//     "days",
//     "hours",
//     "minutes",
//     "seconds",
//     "milliseconds",
//   ]);

//   let { years, months, days, hours, minutes, seconds, milliseconds } = diff;

//   // output in the format expected
//   console.log(
//     `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ${milliseconds} milliseconds`,
//   );
// }

// takeDifference(date1, date2);

// console.log();

// // ***************************************************************************************
// // // Q47 -> Add or subtract n days from a given days [e.g. -> Add 7 days to "2025-05-01"]
// // ***************************************************************************************

// let date = "2022-01-10Z";

// let givenDate = new Date(date).getTime();
// let days = 7 * 24 * 60 * 60 * 1000;
// console.log(days);

// let addDay = givenDate + days;

// console.log(new Date(addDay));

// // ***************************************************************************************
// // // Q48 -> Calculate the user's age from their date of birth.
// // ***************************************************************************************

// let dob = new Date("2002-07-10");
// let currentDate = new Date();

// let age = currentDate.getFullYear() - dob.getFullYear();
// let monthDiff = currentDate.getMonth() - dob.getMonth();
// let dayDiff = currentDate.getDate() - dob.getDate();

// if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
//   age--;
// } else if (monthDiff === 0 && dayDiff === 0) {
//   console.log("Happy BirthDay !!!");
// }

// console.log(age);

// // ***************************************************************************************
// // // Q49 -> Write a formateDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to centralize this logic in a utility?
// // ***************************************************************************************

// let date = "2025-02-20T01:02:03.345Z";

// function formatDate(dateStr) {
//   let date = new Date(dateStr);
//   return date.toLocaleDateString("en-in", {
//     weekday: "long",
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// let formatedDate = formatDate(date);
// console.log(formatedDate);

// formatedDate = formatedDate.split(" ");
// console.log(formatedDate);
// formatedDate.forEach((element) => {
//   console.log(element);
// });

// ***************************************************************************************
// // Q50 -> What are the different options and parameters available in toLocalString and toLocalDateString etc to format date?
// ***************************************************************************************
let date = new Date();
console.log(date);
console.log(
  date.toLocaleString("en-EN", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "IST",
    "Asia/Kolkata": "Asia/Kolkata",
    timeZoneName: "short",
  }),
);
