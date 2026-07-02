use("myusers")

// db.users.insertMany([
//   {"name":"Himanshu", age:20},
//   {"name":"Meera"},
//   {"age": 19},
//   {"name":'Mohan', age: 23},
//   {"name":"Sohan", age: "22"},
//   {"name":"Ramya", age: 21}
// ])

// db.users.find({ age: { $exists: false } })
db.users.find({ age: { $type: 'int' } })