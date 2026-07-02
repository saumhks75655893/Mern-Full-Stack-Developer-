use("ecommerse")
// db.createCollection("products")
db.products.find({}, { tags: 1 })


// db.products.updateMany(
//   {},
//   {
//     $set: { price: 100 }
//   }
// )

// db.products.updateMany(
//   {},
//   { $unset: { price: "" } }
// )

// db.products.updateMany({},
//   { $inc: { stock: 5 } } // increment stock by 5
// )

// db.products.updateMany({},
//   { $inc: { stock: -5 } } // decrement stock by 5
// )

// db.products.updateMany({},
//   { $mul: { stock: 2 } } // multiply stock by 2
// )

// db.products.updateMany({},
//   { $rename: { stock: "Quantity" } } // rename field
// )

// db.products.updateMany({},
//   { $rename: { Quantity: "Stock" } } // rename field
// )

// db.products.updateMany({},
//   { $min: { Stock: 100 } } // set minimum value for Stock field
// )


// db.products.updateMany({},
//   { $max: { Stock: 100 } } // set maximum value for Stock field
// )


// db.products.updateMany({},
//   { $push: { tags: "lipstick" } } // add new tag to tags array
// )

// db.products.updateMany({},
// { $addToSet: { tags: "lipstick" } } // add new tag to tags array but only if
// it doesn't already exist duplicate not allowed
// )


// db.products.updateMany({},
//   { $pull: { tags: "fragrances" } } // remove tag from tags array
// )


// db.products.updateMany({},
//   { $addToSet: { tags: "beauty" } } // add new tag to tags array but only if it doesn't already exist duplicate not allowed
// )





