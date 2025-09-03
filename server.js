
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// simple home route
app.get("/", (req, res) => {
  res.send("UPI Payment Backend is Running 🚀");
});

// pay route
app.get("/pay", (req, res) => {
  const amount = req.query.amount;
  const upiId = "9109135147-4@ybl"; // तुम्हारा UPI ID
  const name = "NDP"; // कोई भी नाम डाल सकते हो

  if (!amount) {
    return res.status(400).send("Amount is required");
  }

  // UPI deeplink
  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  res.json({ upiLink });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
