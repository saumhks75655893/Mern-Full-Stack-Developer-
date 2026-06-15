// // 1->  CREATION OF DATE

// let date = new Date();
// console.log(date); // current date and time in ist(indian standard time) format

// let date1 = new Date("2025-07-06T15:37:35Z"); // iso format
// console.log(date1);
// let date2 = new Date("May 19, 2025 12:00:00"); // long format
// console.log(date2);
// let date3 = new Date("2025/05/25 07:00:00"); // Slash format
// console.log(date3);
// let date4 = new Date(2025, 4, 10, 12, 5); // Date(year, month, date, hour, minute, second, millisecond)
// console.log(date4);

// // Note:
// let date5 = new Date("31");
// console.log(date5); //output-> Invalid result

// let date6 = new Date("32");
// console.log(date6); // output-> available

// // copy another date
// let date7 = new Date(date6);
// console.log(date7);

// // 2-> GETTING PARTS OF THE DATE

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTimezoneOffset() / 60); // UTC - ist; -> output in negative

// // // 3-> SETTING PARTS OF THE DATE

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());

// // setting part of the date
// date.setFullYear("2023");
// console.log(date.getFullYear());
// date.setMonth("3");
// console.log(date.getMonth());
// date.setDate("20");
// console.log(date.getDate());

// // // 4-> WORKING WITH TIMESTAMP

// // let date = new Date();
// console.log("Till Now time in milliseconds using now() method :", Date.now());
// let timestamp = new Date().getTime();
// console.log(
//   "Till now time in millitsecons using getTime() method :",
//   timestamp
// );

// // // 5-> FORMATTING DATES

// let date = new Date();
// console.log();
// console.log(date);
// console.log(date.toISOString());

// console.log();
// console.log(date.toString());
// console.log(date.toTimeString());
// console.log(date.toDateString());

// console.log();
// console.log(date.toLocaleString());
// console.log(date.toUTCString());
// console.log(date.getUTCDay());
// console.log(date.getUTCDate());
// console.log(date.getUTCMonth() + 1);
// console.log(date.getUTCFullYear());
// console.log(date.getUTCHours());
// console.log(date.getUTCMinutes());
// console.log(date.getUTCMilliseconds());

// console.log();
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// console.log();

// // // 6-> CUSTOM FORMATTING

// let d = new Date();
// let formattedDate = `${d.getDate()} day ${
//   d.getMonth() + 1
// } month ${d.getFullYear()} year`;
// console.log(formattedDate);

// // // CALCULATIONS ON TIME STAMP

// // // TIMESTAMP

// console.log(Date.now());
// let date = new Date();
// console.log(date.getTime());

// // // CONVERTING TIMESTAMP TO DATE
// let milliNow = date.getTime();
// let date1 = new Date(milliNow);
// console.log(date1);

// // // ADDING OR SUBSTRACTING TIME

// let currentTime = Date.now();
// console.log(currentTime);
// let date1 = new Date(currentTime);
// console.log(date1.toLocaleString());

// // 2 hours later

// let twoHourLater = 60 * 60 * 1000 * 2;
// let twoHourLaterMillis = currentTime + twoHourLater;
// console.log(twoHourLaterMillis);
// let date = new Date(twoHourLaterMillis);
// console.log(date.toLocaleString());

// let twoHourBeforeMillis = currentTime - twoHourLater;
// console.log(twoHourBeforeMillis);
// let time2 = new Date(twoHourBeforeMillis);
// console.log(time2.toLocaleString());

// // // CALCULATING DIFFERENCE BETWEEN DATES

// let date1 = new Date("2025-05-12T00:00:00");
// let date2 = new Date("2023-05-12T00:00:00");
// console.log(date1);
// console.log(date2);
// let diffDate = date1 - date2;
// console.log("Difference in Millisenconds :", diffDate);
// console.log("Difference in Seconds :", diffDate / 1000);
// console.log("Difference in Minutes  :", diffDate / 1000 / 60);
// console.log("Difference in Hours : ", diffDate / 1000 / 60 / 60);
// console.log("Difference in days : ", diffDate / 1000 / 60 / 60 / 24);
// console.log(
//   "Difference in weeks : ",
//   Math.round(diffDate / 1000 / 60 / 60 / 24 / 7)
// );
// console.log(
//   "Difference in Years : ",
//   Math.round(diffDate / 1000 / 60 / 60 / 24 / 7 / 52)
// );

// // CONVERTING MILLISECONDS TO HUMAN UNITS

// let milli = 1500;
// let date = new Date(milli);
// console.log(date);

// // let seconds = milli / 1000;
// let seconds = Math.floor(milli / 1000);
// console.log(seconds);
// let milliseconds = Math.floor(milli % 1000);
// console.log(milliseconds);
// console.log(
//   `${milli} milliseconds  = ${seconds} seconds ${milliseconds} milliseconds`
// );

let milli = 65000;
let minutes = Math.floor(milli / 1000 / 60);
let seconds = Math.floor((milli % (1000 * 60)) / 1000);
console.log(minutes);
console.log(seconds);
