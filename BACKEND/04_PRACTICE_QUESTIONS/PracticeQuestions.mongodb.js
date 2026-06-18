// // LEVEL - 1


// show('dbs')

// use('shopApp')

// show('collections')


// ==============================================================
// // LEVEL - 2


// use('shopApp')

// db.users.insertOne({"name" : "Rahul", "email":"rahul123@gmail.com", "city": "Bhagalpur", "age" : 22})
// db.users.insertOne({ "name": "Mohan", "email": "mohan3453123@gmail.com", "city": "Bhagalpur", "age": 22 })


// db.users.insertMany([
//   {"name":"Himanshu", "email":"hk23@gmail.com", "city":"Chandauli", "age" : 22},
//   {
//     "name":"Radhika",
//     "email":"radhika2454@gmail.com",
//     "city":"Mau",
//     "age": 23
//   }
// ])


// db.users.find()
// db.users.find({ "city": "Bhagalpur" })


// ==================================================
// // LEVEL - 3

// use("ecommerce")

// db.createCollection("products")

// db.products.insertMany([
//   {
//     name : 'iphone',
//     price : 80000,
//     category: "electronics",
//     stock: 10
//   },
//   {
//     name : 'Laptop',
//     price: 150000,
//     category: 'electronics',
//     stock: 5
//   },
//   {
//     name : "Headphones",
//     price:  2000,
//     category: 'electronics',
//     stock : 20
//   },
//   {
//     name : "Shoes",
//     price: 3000,
//     category : "fashion",
//     stock : 10
//   }
// ])

// db.products.find()
// db.products.find({ category: "electronics" })
// db.products.countDocuments


// ==========================================
// LEVEL - 4

// use("shopApp")
// show("collections")
// db.users.find()

// db.users.updateMany(
//   { "city": "Bhagalpur" },
//   { $set: { "city": "Mumbai" } }
// )

// use("ecommerce")

// db.products.updateOne({price : 80000 }, {$set : {price : 100000}})
// db.products.updateOne({name : "Laptop" }, {$set : {price : 200}})
// db.products.find()

// db.products.updateMany(
//   {},
//   { $set: { stock: 20 } })


// db.products.updateMany(
//   { category: "electronics" },
//   { $inc: { stock: 5 } })


// use("shopApp");

// db.users.updateOne({
//   email :"radhika2454@gmail.com"
// }, {$set : {email : "radhikabhabhi34534@gmail.com"}})

// ============================================
// LEVEL - 5 

// use("shopApp")

// db.users.deleteOne({name : 'Mohan'})

// db.users.deleteMany({age : {$lt : 23}})    

// use("ecommerce")

// db.products.deleteOne({})

// ==========================================
//  LEVER - 6 

use("shopApp")
// db.users.find({ age: { $gt: 20 } })
// db.users.countDocuments({"city" : 'Mau'})
show("collections")


// db.users.find({ "age": { $lt: 20 } })

// use("ecommerce");

// db.products.find({ "price": { $lt: 5000 } })
