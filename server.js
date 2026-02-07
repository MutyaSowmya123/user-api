const express = require("express");
//const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

let users = [];
let id = 1;

// Create user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  try{
    if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
    }

    const user={id: id++, name, email};
    users.push(user);
    res.status(201).json(user);
  }catch(error){
    res.status(500).json({message: "Server Error"});
  }

  /*const user = {
    id: uuidv4(),
    name,
    email
  };*/
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get user by id
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

//delete user by id
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const initialLength = users.length;

  users = users.filter(u => u.id !== userId);

  if (users.length === initialLength) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

