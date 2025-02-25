const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();

const getFilePath = (fileName) =>
  path.join(__dirname, "..", "storage", path.basename(fileName));


const validatePDF = (req, res, next) => {
  const checkExtension = (name) => name && name.toLowerCase().endsWith(".pdf");

  if (req.query.fileName && !checkExtension(req.query.fileName)) {
    return res.status(400).json({ error: "Only PDF files are allowed" });
  }

  if (req.body.fileName && !checkExtension(req.body.fileName)) {
    return res.status(400).json({ error: "Only PDF files are allowed" });
  }

  if (req.body.oldName && !checkExtension(req.body.oldName)) {
    return res.status(400).json({ error: "Only PDF files are allowed" });
  }

  if (req.body.newName && !checkExtension(req.body.newName)) {
    return res.status(400).json({ error: "Only PDF files are allowed" });
  }

  next();
};

router.get("/read", validatePDF, async (req, res) => {
  try {
    const data = await fs.readFile(getFilePath(req.query.fileName), "utf8");
    res.json({ content: data });
  } catch (err) {
    res.status(404).json({ error: "File not found" });
  }
});

router.post("/append", validatePDF, async (req, res) => {
  const { fileName, content } = req.body;
  try {
    await fs.appendFile(getFilePath(fileName), content, "utf8");
    res.json({ message: "Content appended successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/rename", validatePDF, async (req, res) => {
  const { oldName, newName } = req.body;

  if (!oldName || !newName) {
    return res
      .status(400)
      .json({ error: "Both old and new file names are required" });
  }

  const oldFilePath = getFilePath(oldName);
  const newFilePath = getFilePath(newName);

  try {
    await fs.access(oldFilePath);
    await fs.rename(oldFilePath, newFilePath);
    res.json({ message: "File renamed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/create-dir", async (req, res) => {
  const { dirName } = req.body;

  if (!dirName) {
    return res.status(400).json({ error: "Directory name is required" });
  }

  const dirPath = getFilePath(dirName);

  try {
    await fs.mkdir(dirPath, { recursive: true });
    res.json({ message: "Directory created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete-dir", async (req, res) => {
  const { dirName } = req.query;

  if (!dirName) {
    return res.status(400).json({ error: "Directory name is required" });
  }

  const dirPath = getFilePath(dirName);

  try {
    await fs.rm(dirPath, { recursive: true, force: true });
    res.json({ message: "Directory deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/write", validatePDF, async (req, res) => {
  try {
    await fs.writeFile(
      getFilePath(req.body.fileName),
      req.body.content,
      "utf8"
    );
    res.json({ message: "File written successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", validatePDF, async (req, res) => {
  try {
    await fs.unlink(getFilePath(req.query.fileName));
    res.json({ message: "File deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
