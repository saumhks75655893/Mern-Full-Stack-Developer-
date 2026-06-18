// const result1 = show('dbs')
// const result2 = use("ecommerse")

// console.log(result1)
// console.log(result2)


show('dbs');
// use('ecommerse');
// db.product.deleteOne({})
// db.product.find()

// db.createCollection("users")
// db.users.insertOne({
//   "name": "Rajiv ",
//   "role": "Editor"
// })


// show('collections'); 


// db.users.insertMany([
//   {"name" : "Suren wagh", "role":"composer"}, 
//   {"name" : "Mohinta raghu", "role":"Designer"}
// ])


use('ecommerse');
db.users.find()