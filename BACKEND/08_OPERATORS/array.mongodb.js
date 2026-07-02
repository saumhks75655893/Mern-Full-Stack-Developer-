use('test2')

// db.students.insertMany([
//   {
//     name: "Rahul",
//     skills: ["HTML", "CSS", "JavaScript"],
//     marks: [70, 80, 90]
//   },
//   {
//     name: "Priya",
//     skills: ["python", "java"],
//     marks: [60, 75]
//   },
//   {
//     name: "Amit",
//     skills: ["javascript", "NodeJs", "MongoDB"],
//     marks: [85, 88, 92]
//   }
// ])

// db.students.find()

// db.students.find({
//   skills: { $all: ["HTML", "CSS"] }
// })

// db.students.find({
//   skills: { $size: 3 }
// })

// db.students.find({
//   skills: { $in: ["HTML", "javascript"] }
// })


// db.students.find({
//   skills: { $nin: ["HTML", "javascript"] }
// })

//////////////////////////////// PRODUCTS ///////////////////////////////
// db.products.insertMany([
//   {
//     name: "Laptop",
//     reviews: [
//       { user: "Rahul", rating: 4 },
//       { user: "Amit", rating: 5 },
//     ]
//   },
//   {
//     name: "Mobile",
//     reviews: [
//       { user: "Priya", rating: 3 },
//       { user: "Ankit", rating: 4 },
//       { user: "Rahul", rating: 5 }
//     ]
//   }
// ])


db.products.find({
  reviews: { $elemMatch: { user: "Rahul", rating: 5 } }
})