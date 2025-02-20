const fs = require("fs/promises");

async function readFileContent(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

readFileContent("./t.text");

async function writeFileContent(filePath, content) {
  try {
    await fs.writeFile(filePath, content, "utf-8");
    console.log("Write");
  } catch (error) {
    console.log(error.message);
  }
}

writeFileContent("./t.text", "mosaa");

async function appendFileContent(filePath, content) {
  try {
    await fs.appendFile(filePath, `\n${content}`, "utf-8");
    console.log("Content ....");
  } catch (error) {
    console.log(error.message);
  }
}

appendFileContent("./t.text", "bye bye node");
