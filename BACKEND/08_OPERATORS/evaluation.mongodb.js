use("test")

// db.createCollection("employee")


// db.employee.insertMany([
//   {
//     name : "Rahul",
//     salary : 50000,
//     bonus : 10000
//   },
//   {
//     name: "Priya",
//     salary : 60000,
//     bonus : 5000
//   },
//   {
//     name: "Amit",
//     salary : 45000,
//     bonus: 15000
//   },
//   {
//     name : "Neha",
//     salary : 70000,
//     bonus : 2000
//   }
// ])

// db.employee.find()

// db.employee.updateOne({ 'name': 'Rahul' }, { $set: { 'salary': 8000 } })

///////////////////////////////////// expr operator ///////////////////////////
// db.employee.find({
//   $expr: {
//     $lt: ['$salary', '$bonus']
//   }
// })

// db.employee.find({
//   $expr: {
//     $gt: [
//       { $add: ['$salary', '$bonus'] }, 60000
//     ]
//   }
// })

// db.createCollection("products")
// db.products.insertMany([
//   {
//     name : "Laptop",
//     price : 60000,
//     discountPrice : 55000
//   },
//   {
//     name : "Phone",
//     price : 30000,
//     discountPrice : 31000
//   },
//   {
//     name : "Tablet",
//     price : 20000,
//     discountPrice : 18000
//   },
//   {
//     name : "Headphones",
//     price : 5000,
//     discountPrice : 4500
//   }
// ])

// db.products.find({
//   $expr: {
//     $lt: [
//       '$price', '$discountPrice'
//     ]
// //   }
// })

// db.students.insertMany([
//   {
//     name: 'Karan',
//     math: 90,
//     science: 85,
//   },
//   {
//     name: 'Pooja',
//     math: 50,
//     science: 65
//   },
//   {
//     name: "Anita",
//     math: 60,
//     science: 75
//   },
//   {
//     name: "Ravi",
//     math: 80,
//     science: 70
//   }
// ])

// db.students.find({
//   $expr: {
//     $gt: ['$math', '$science']
//   }
// })


/////////////////// Regex Operators //////////////////////
// db.students.find({
//   'name': { $regex: "^R" }
// })

// db.students.find({
//   'name': { $regex: "a$" }
// })

// db.students.find({
//   'name': { $regex: "av" }
// })

// db.students.find({
//   'name': {
//     $regex: "^r",
//     $options: 'i'     // case insensitive search
//   },
// })


// db.students.find({
//   'name': /^r/
// })

// db.students.find({
//   'name': /^r/i      // case insensitive search
// })





///////////////////////////////////// mod operator ///////////////////////////

// db.numbers.insertMany([
//   { value: 10 },
//   { value: 2 },
//   { value: 5 },
//   { value: 3 },
//   { value: 13 },
//   { value: 200 },
//   { value: 215 },
// ])

db.numbers.find({
  value: { $mod: [2, 0] }
})

