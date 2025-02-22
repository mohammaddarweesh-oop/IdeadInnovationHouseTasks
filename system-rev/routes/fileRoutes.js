const router = require("express").Router();
const fs = require("fs").promises;
const path = require("path");
const asyncHandler = require("express-async-handler");

const getFilePath = (filename) =>
  path.join(__dirname, "..", "storage", path.basename(filename));

/**
 * @route POST /create
 * @description Creates a new file with the provided content.
 * @param {string} req.query.filename - The name of the file to create.
 * @param {string} req.body.content - The content to write into the file.
 * @returns {201} File created successfully.
 * @returns {500} Internal server error.
 */
router.post(
  "/create",
  asyncHandler(async (req, res) => {
    await fs.writeFile(
      getFilePath(req.query.filename),
      req.body.content,
      "utf-8"
    );
    res.status(201).json({ message: "File written successfully" });
  })
);

/**
 * @route GET /read
 * @description Reads the content of a specified file.
 * @param {string} req.query.filename - The name of the file to read.
 * @returns {200} File content retrieved successfully.
 * @returns {500} File not found or internal server error.
 */
router.get(
  "/read",
  asyncHandler(async (req, res) => {
    const fileContent = await fs.readFile(
      getFilePath(req.query.filename),
      "utf-8"
    );
    if (!fileContent) {
      return res.status(500).json({ message: "Not Found The File " });
    }
    res.status(200).json({ message: fileContent });
  })
);

/**
 * @route POST /append
 * @description Appends content to an existing file.
 * @param {string} req.query.filename - The name of the file to append content to.
 * @param {string} req.body.content - The content to append.
 * @returns {201} File updated successfully.
 * @returns {500} Internal server error.
 */
router.post(
  "/append",
  asyncHandler(async (req, res) => {
    await fs.appendFile(
      getFilePath(req.query.filename),
      req.body.content,
      "utf-8"
    );
    res.status(201).json({ message: "Fil is Updated" });
  })
);

/**
 * @route PUT /rename
 * @description Renames an existing file.
 * @param {string} req.body.oldName - The current name of the file.
 * @param {string} req.body.newName - The new name for the file.
 * @returns {201} File renamed successfully.
 * @returns {400} Missing parameters.
 * @returns {500} Internal server error.
 */
router.put(
  "/rename",
  asyncHandler(async (req, res) => {
    const { oldName, newName } = req.body;

    if (!oldName || !newName) {
      return res
        .status(400)
        .json({ error: "Both old and new file names are required" });
    }

    const oldFileName = getFilePath(oldName);
    const newFileName = getFilePath(newName);
    await fs.access(oldFileName);

    await fs.rename(oldFileName, newFileName);
    res.status(201).json({ message: "File renamed successfully" });
  })
);

/**
 * @route DELETE /delete
 * @description Deletes a specified file.
 * @param {string} req.query.filename - The name of the file to delete.
 * @returns {200} File deleted successfully.
 * @returns {500} File not found or internal server error.
 */
router.delete(
  "/delete",
  asyncHandler(async (req, res) => {
    await fs.unlink(getFilePath(req.query.filename));
    res.json({ message: "File deleted successfully" });
  })
);

/**
 * @route POST /create-dir
 * @description Creates a new directory.
 * @param {string} req.body.dirName - The name of the directory to create.
 * @returns {200} Directory created successfully.
 * @returns {400} Missing directory name.
 * @returns {500} Internal server error.
 */
router.post(
  "/create-dir",
  asyncHandler(async (req, res) => {
    const { dirName } = req.body;

    if (!dirName) {
      return res.status(400).json({ error: "Directory name is required" });
    }

    await fs.mkdir(getFilePath(dirName), { recursive: true });

    res.json({ message: "Directory created successfully" });
  })
);

/**
 * @route DELETE /delete-dir
 * @description Deletes a specified directory and its contents.
 * @param {string} req.body.dirName - The name of the directory to delete.
 * @returns {200} Directory deleted successfully.
 * @returns {400} Missing directory name.
 * @returns {500} Internal server error.
 */

router.delete(
  "/delete-dir",
  asyncHandler(async (req, res) => {
    const { dirName } = req.body;
    if (!dirName) {
      return res.status(400).json({ error: "Directory name is required" });
    }

    await fs.rm(getFilePath(dirName), { recursive: true, force: true });
    res.json({ message: "Directory deleted successfully" });
  })
);

module.exports = router;
