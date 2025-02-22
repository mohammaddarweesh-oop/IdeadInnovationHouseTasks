const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const router = express.Router();
const asyncHandler = require("express-async-handler");


const getFilePath = (filename) =>
  path.join(__dirname, "", "storage", path.basename(filename));

router.get("/read", async (req, res) => {
  try {
    const data = await fs.readFile(getFilePath(req.query.filename), "utf-8");
    res.status(200).json({ content: data });
  } catch (error) {
    res.status(404).json({ error: "file not found" });
  }
});

router.post("/write", async (req, res) => {
  try {
    await fs.writeFile(
      getFilePath(req.body.filename),
      req.body.content,
      "utf-8"
    );
    res.status(201).json({ message: "file written successfully" });
  } catch (error) {
    res.status(500).json({ error: "error message file connot be written" });
  }
});

router.post("/append", async (req, res) => {
  try {
    await fs.appendFile(
      getFilePath(req.body.filename),
      req.body.content,
      "utf-8"
    );
    res.status(201).json({ message: "content updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "error message file connot be appended" });
  }
});
router.put("/rename", async (req, res) => {
  const { oldName, newName } = req.body;

  if (!oldName || !newName)
    return res.status(404).json({ message: "both file names are required" });

  try {
    await fs.rename(getFilePath(oldName), getFilePath(newName));

    res.status(201).json({ message: "file renamed successfully" });
  } catch (error) {
    res.status(500).json({ error: "error message file connot be renamed" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await fs.unlink(getFilePath(req.query.filename));

    res.status(201).json({ message: "file deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "error message file connot be renamed" });
  }
});
router.delete("/deleteDir", async (req, res) => {
  try {
    await fs.rm(getFilePath(req.query.dirname), {
      recursive: true,
      force: true,
    });

    res.status(201).json({ message: "directory cannot be removed" });
  } catch (error) {
    res.status(500).json({ error: "error message file connot be deleted" });
  }
});

router.post("/create-dir", async (req, res) => {
  if (!req.query.dirname) {
    return res.status(400).json({ error: "dirname is required" });
  }

  try {
    await fs.mkdir(getFilePath(req.query.dirname), {
      recursive: true,
      force: true,
    });

    res.status(201).json({ message: "Directory created successfully" });
  } catch (error) {
    res.status(201).json({ message: "Directory created successfully" });
  }
});

module.exports = router;
