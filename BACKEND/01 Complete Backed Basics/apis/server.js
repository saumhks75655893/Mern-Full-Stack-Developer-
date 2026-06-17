import express from "express"
import mongoose, { mongo } from "mongoose"


//  connection of mongodb with express js 
(async () => {

  const connectionInstance = await mongoose.connect("mongodb://anshukumar75655893_db_user:G8uObnc3ncvQt7Gu@ac-fldsagx-shard-00-00.hwpt0xh.mongodb.net:27017,ac-fldsagx-shard-00-01.hwpt0xh.mongodb.net:27017,ac-fldsagx-shard-00-02.hwpt0xh.mongodb.net:27017/?ssl=true&replicaSet=atlas-xlqb70-shard-0&authSource=admin&appName=learning-mongo-bd")

  // console.log(connectionInstance.connection.host)
}
)()

// data definition
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  role: String
})

// collection creation
const userCollection = mongoose.model('User', UserSchema);

const app = express()

app.use(express.json())


// Created api : --------
app.post("/create-user", async (req, res) => {
  const userData = req.body;
  const createdUser = await userCollection.create(userData)
  res.send({
    "createdUser": createdUser
  })
})

// reall all document api 
app.get("/get-all-users", async (req, res) => {
  const users = await userCollection.find();
  res.send(users);
})

// real single document api 
app.get("/get-single-user", async (req, res) => {
  const singleUser = await userCollection.findOne();
  res.send(singleUser);
})

// real single document basis on some query api 
app.get("/get-single-user-query-based", async (req, res) => {
  const singleUser = await userCollection.findOne({ name: req.body.name });
  res.send(singleUser);
})

// update user 
app.put("/update-user/:id", async (req, res) => {
  console.log(req.query)
  const updateUser = await userCollection.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send({
    updateUser,
  })
})


// Delete User 
app.delete("/delete-user", async (req, res) => {
  const deletedUser = await userCollection.findByIdAndDelete(req.query)
  res.send({
    deletedUser
  })

})
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000")
})