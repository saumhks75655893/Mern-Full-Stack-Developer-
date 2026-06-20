use('testDb')

db.createCollection("users"); 

db.users.insertMany([
  {"_id" : 1, "name": "Ram"}, 
  {"_id" : 2, "name" : "Laxman"}, 
  {"_id": 1, "name": "Bharat"}, 
{"_id" : 3, "name" : "Shatrughn"}
])

