const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ UPI Payment Backend is Running 🚀");
});

app.get("/pay", (req, res) => {
  const amount = req.query.amount;
  const upiId = "9109135147-4@ybl"; // तुम्हारा UPI ID
  const name = "NDP"; // नाम

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  res.json({ upiLink });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
