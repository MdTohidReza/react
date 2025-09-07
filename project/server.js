const express = require("express");
const app = express();
const PORT = 5000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my first Express.js server 🚀");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a simple Express project.");
});

// API route
app.get("/api/data", (req, res) => {
  res.json({ user: "Tohid", role: "Developer", status: "Active" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
