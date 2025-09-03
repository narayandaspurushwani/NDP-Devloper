const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example API to save UPI payment request
app.post("/create-payment", (req, res) => {
  const { amount } = req.body;
  const upiId = "9109135147-4@ybl"; // तुम्हारा UPI ID

  // UPI deep link बनाना
  const upiLink = `upi://pay?pa=${upiId}&pn=NDP%20Developer&am=${amount}&cu=INR`;

  res.json({ success: true, link: upiLink });
});

// Root test route
app.get("/", (req, res) => {
  res.send("UPI Backend is running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));