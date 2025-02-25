const fs = require("fs/promises");
const readStream = fs.createReadStream("name.txt", { encoding: "utf8" });

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading the file.");
});

// async function readFileContent(filePath) {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// readFileContent("./t.text");

// async function writeFileContent(filePath, content) {
//   try {
//     await fs.writeFile(filePath, content, "utf-8");
//     console.log("Write");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// writeFileContent("./t.text", "mosaa");

// async function appendFileContent(filePath, content) {
//   try {
//     await fs.appendFile(filePath, `\n${content}`, "utf-8");
//     console.log("Content ....");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// appendFileContent("./t.text", "bye bye node");

// async function deleteFileContent(filePath) {
//   try {
//     await fs.unlink(filePath);
//     console.log("Deleted");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// deleteFileContent("./t.text");

// async function renameFileContent(filePath, newName) {
//   try {
//     await fs.rename(filePath, newName);
//     console.log("Content ....");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// renameFileContent("./t.text", "name");

async function renameFileContent(filePath, newName) {
  try {
    await fs.rename(filePath, newName);
    console.log("Content ....");
  } catch (error) {
    console.log(error.message);
  }
}
