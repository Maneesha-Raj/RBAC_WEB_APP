
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
    const data = req.body; // Retrieve the user data from the request body
    const result = await addUser.create(data); // Use the users model to create a new user
    res.status(201).json(result); // Respond with the created user
    console.log(result); // Log the result for debugging
  } catch (error) {
    console.error(error); // Log any errors
    res.status(500).json({ error: error.message }); // Respond with an error message
  }
});



//----------------------------------------------------------------------------------------------

// router.post("/users", async (req, res) => {
//   const { name, email, role, status = "Active" } = req.body; // Default status to "Active" if not provided
//   try {
//     const newUser = new addUser({ name, email, role, status });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser); // Return the saved user as a JSON response
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



//---------------------------------------------------------------------
// router.post("/users", async (req, res) => {
//   const { name, email, role, status } = req.body;
//   try {
//     const newUser = new addUser({ name, email, role, status });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


//----------------------------------------------------------------------------------------------------------

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


// //routes.js

// const express = require("express");
// const router = express.Router();
// const products = require("../models/products");
// const verifyToken = require("../middleware/authMiddleware");



// router.get("/all-products", async (req, res) => {
//   const details = await products.find({});
//   res.json(details);
// });

// router.get("/all-products/:id", async (req, res) => {
//   const productId = req.params.id;
//   const details = await products.findOne({ productId: productId }, { _id: 0 });
//   res.json(details);
// });




// router.get("/products", verifyToken, async (req, res) => {
//   const details = await products.find({});
//   res.json(details);
// });

// router.get("/products/:id", async (req, res) => {
//   const productId = req.params.id;
//   const details = await products.findOne({ productId: productId }, { _id: 0 });
//   res.json(details);
// });

// router.post("/products", async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await products.create(data);
//     res.status(201).json(result);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json();
//   }
// });



// router.put("/products/:id", async (req, res) => {
//   const data = req.body;
//   const productId = data.productId;
//   try {
//     const result = await products.findOneAndUpdate(
//       { productId: productId},
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!result) {
//       return res.status(404).send("Item not found");
//     }
//     res.send("Item updated successfully");
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });

// router.delete("/products/:id",verifyToken, async (req, res) => {
//   const productId = req.params.id;
//   if(req.userType != 'admin'){
//     return res
//     .status(401)
//     .json({ error: "Authentication failed- password doesn't match" });
//   }
//   try {
//     const result = await products.findOneAndDelete({ productId: productId });
//     if (!result) {
//       return res.status(404).send("Item not found");
//     }
//     res.send("Item deleted successfully");
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });


// router.get('/products/:id', async (req, res) => {
//   try {
//       const product = await products.findById(req.params.id);
//       if (!product) {
//           return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json(product);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });


// router.get('/products/category/:category', async (req, res) => {
//   const { category } = req.params;
  
//   try {
//       const filteredProducts = await products.find({ category: category });
//       res.json(filteredProducts);
//   } catch (error) {
//       console.error('Error fetching products by category:', error);
//       res.status(500).json({ message: 'Server error' });
//   }
// });



// router.get('/all-products/category/:category', async (req, res) => {
//   const { category } = req.params;
  
//   try {
//       const filteredProducts = await products.find({ category: category });
//       res.json(filteredProducts);
//   } catch (error) {
//       console.error('Error fetching products by category:', error);
//       res.status(500).json({ message: 'Server error' });
//   }
// });


// router.post('/products/view-review/:id', verifyToken, async (req, res) => {
//   const { id } = req.params;
//   const userEmail = req.email; 
//   const { reviewText, rating } = req.body; 

//   try {
//       const updatedProduct = await products.findOneAndUpdate(
//           { productId: id },
//           { $push: { reviews: { userDetails: userEmail, reviewText, rating } } },
//           { new: true }
//       );

//       if (!updatedProduct) {
//           return res.status(404).json({ message: 'Product not found' });
//       }

//       res.status(200).json(updatedProduct);
//   } catch (err) {
//       console.error('Error adding review:', err.message);
//       res.status(500).json({ message: 'Server Error' });
//   }
// });

// router.get('/products/view-review/:id', async (req, res) => {
//   const productId = req.params.id;
//   try {
//       const product = await products.findOne({ productId: productId });
//       if (!product) {
//           return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json(product.reviews);
//   } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).json({ message: 'Server error while fetching reviews' });
//   }
// });



// router.get('/all-products/view-review/:id', async (req, res) => {
//   const productId = req.params.id;
//   try {
//       const product = await products.findOne({ productId: productId });
//       if (!product) {
//           return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json(product.reviews);
//   } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).json({ message: 'Server error while fetching reviews' });
//   }
// });

// router.put('/products/view-review/:id', verifyToken, async (req, res) => {
//   const { id } = req.params;
//   const userEmail = req.email; 
//   const { reviewText, rating } = req.body;

//   try {
//     const product = await products.findOne({ productId: id });
//     if (!product) return res.status(404).json({ message: 'Product not found' });

//     const review = product.reviews.find(r => r.userDetails === userEmail);
//     if (!review) return res.status(404).json({ message: 'Review not found' });

//     review.reviewText = reviewText || review.reviewText;
//     review.rating = rating || review.rating;

//     await product.save();
//     res.status(200).json(product);
//   } catch (err) {
//     console.error('Error updating review:', err.message);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });


// router.get('/user-home/reviewed-products', verifyToken, async (req, res) => {
//   try {
//     const userEmail = req.email; 
//     const reviewedProducts = await products.find({ 'reviews.userDetails': userEmail });

    
//     const filteredProducts = reviewedProducts.map(product => {
//       product.reviews = product.reviews.filter(review => review.userDetails === userEmail);
//       return product;
//     });

//     if (filteredProducts.length === 0) return res.status(404).json({ message: 'No reviewed products found' });

//     res.json(filteredProducts);
//   } catch (error) {
//     console.error('Error fetching reviewed products:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });




// router.get('/products/product-reviews/:id', async (req, res) => {
//   const productId = req.params.id;
//   try {
//       const product = await products.findOne({ productId: productId });
//       if (!product) {
//           return res.status(404).json({ message: 'Product not found' });
//       }
//       res.json(product.reviews);
//   } catch (error) {
//       console.error('Error fetching reviews:', error);
//       res.status(500).json({ message: 'Server error while fetching reviews' });
//   }
// });



// module.exports = router;

