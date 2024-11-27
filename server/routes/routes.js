
// routes.js



const express = require("express");
const router = express.Router();
const addUser = require("../models/AddUserschema");

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await addUser.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await addUser.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - Add a new user

router.post("/users", async (req, res) => {
  try {
    const data = req.body; 
    const result = await addUser.create(data); 
    res.status(201).json(result); 
    console.log(result); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: error.message }); 
  }
});





// PUT - Update an existing user
router.put("/users/:id", async (req, res) => {
  const { name, email, role, status } = req.body;
  try {
    const updatedUser = await addUser.findByIdAndUpdate(
      req.params.id,
      { name, email, role, status },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Remove a user
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await addUser.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;








//-----------------------------------------------------------------------------------------------------------------------------


