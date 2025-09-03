const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("UPI Payment Backend is Running 🚀");
});

app.get("/pay", (req, res) => {
  const amount = req.query.amount;
  const upiId = "9109135147-4@ybl"; // तुम्हारा UPI ID
  const name = "NDP"; // नाम

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  res.json({ upiLink });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});