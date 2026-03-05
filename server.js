const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("AI Short API Running");
});

app.post("/generate", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    // For now just return success
    res.json({
      message: "Video received successfully",
      filename: req.file.filename
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Processing error");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
