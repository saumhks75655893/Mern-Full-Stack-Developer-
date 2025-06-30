console.log("***************** Practice Questions ***************");

// // Q1 -> Create a person object with properties: name, age and city. Then
// /*
//   a) Log each property as: value of "name" property is "manas" using loop
//   b) Add a new property called email to the person object
//   c) Delete "city" property from person object
// */
// // a
// let person = {
//   name: "Himanshu Kumar",
//   age: 21,
//   city: "Chandauli",
// };

// for (let key in person) {
//   console.log(`Value of ${key} property is ${person[key]}`);
// }

// // b
// person.email = "hksinha75@gmail.com";
// console.log(person);

// // c
// delete person.city;
// console.log(person);

// // Q2 -> Create an function that takes an object with firstname, middleName, lastName propeties and returns the full name.

// let obj = {
//   firstName: "Himanshu",
//   middleName: "Kumar",
//   lastName: "Sinha",
// };
// let fullName = (obj) => {
//   return `${obj.firstName} ${obj.middleName} ${obj.lastName}`;
// };

// let fullName1 = fullName(obj);
// console.log(fullName1);

// // Q3 ->  Write a function that takes an object and returns the number of properties in an object

// let obj = {
//   firstName: "Himanshu",
//   middleName: "Kumar",
//   lastName: "Sinha",
//   age: 21,
//   collage: "bbau",
//   married: "Single",
// };

// let numberOfPropeties = (obj) => {
//   return Object.keys(obj).length;
// };

// console.log(obj);
// console.log("Number of Properties in the object :", numberOfPropeties(obj));

// // Q4 -> Write a function that returns an array of names of users who have the role 'admin'.

// const users = [
//   { name: "alice", role: "admin" },
//   { name: "bob", role: "user" },
//   { name: "charlie", role: "admin" },
//   { name: "chaplin", role: "admin" },
//   { name: "Chameli", role: "superAdmin" },
// ];

// own

// console.log(users[0].role);
// let names = [];
// let nameOfUsersForAdmin = (adminNames) => {
//   for (let key in adminNames) {
//     if (adminNames[key].role === "admin") {
//       names.push(adminNames[key].name);
//     }
//   }
// };

// nameOfUsersForAdmin(users);
// console.log(names);

// seen
// function filteredArray(arr, role) {
//   let filteredItem = arr.filter((item) => {
//     return item.role === role;
//   });

//   let resultArray = filteredItem.map((item) => {
//     return item.name;
//   });

//   return resultArray;
// }

// let resultArray = filteredArray(users, "superAdmin");
// console.log(resultArray);

// // Q5 -> Write a function searchProduct(products, keyword) that returns an array of products whose name includes the given keyword (case-sensitive)

// const Products = [
//   { id: 1, name: "iPhone 14" },
//   { id: 2, name: "Samsung Galaxy" },
//   { id: 3, name: "Google Pixel" },
// ];

// let searchProduct = (products, keyword) => {
//   let filteredArray = products.filter((elem) => {
//     return elem.name.toLowerCase().includes(keyword.toLowerCase());
//   });
//   console.log(filteredArray);
// };

// searchProduct(Products, "ip");

// // Q6 -> Write a function groupByPost(comments) that returns an object grouping comments by postId;

// const comments = [
//   { postId: 1, text: "Great Post!" },
//   { postId: 2, text: "Thanks!" },
//   { postId: 1, text: "Very helpful" },
// ];

// function groupByPost(comments) {
//   let groupedByPostComments = {};

//   comments.forEach((obj) => {
//     let { postId, text } = obj;
//     if (groupedByPostComments.hasOwnProperty(postId)) {
//       groupedByPostComments[postId].push(text);
//     } else {
//       groupedByPostComments[postId] = [text];
//     }
//   });
//   console.log(groupedByPostComments);
// }

// groupByPost(comments);

// // Q7 -> Write a function buildQuery (params) that returns
// /*
// const params = {search: "laptop",page: 2, sort: "price"};

// // output -> "search=laptop&page=2&sort=price";
// */
// const params = { search: "laptop", page: 2, sort: "price" };

// function buildQuery(params) {
//   let url = "";
//   for (let key in params) {
//     url = url + `${key}=${params[key]}&`;
//   }

//   let newUrl = url.slice(0, url.length - 1);
//   return newUrl;
// }

// let url = buildQuery(params);
// console.log(url);
