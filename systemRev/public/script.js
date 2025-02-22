const apiUrl = "http://localhost:3000/api";

async function createFile() {
  const filename = document.getElementById("createFileName").value;
  const content = document.getElementById("fileContent").value;
  await fetch(`${apiUrl}/create?filename=${filename}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  alert("File created successfully");
}

async function readFile() {
  const filename = document.getElementById("readFileName").value;
  const response = await fetch(`${apiUrl}/read?filename=${filename}`);
  const data = await response.json();
  document.getElementById("fileOutput").innerText =
    data.message || "No content found";
}

async function deleteFile() {
  const filename = document.getElementById("deleteFileName").value;
  await fetch(`${apiUrl}/delete?filename=${filename}`, { method: "DELETE" });
  alert("File deleted successfully");
}

async function createDir() {
  const dirName = document.getElementById("createDirName").value;
  await fetch(`${apiUrl}/create-dir`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dirName }),
  });
  alert("Directory created successfully");
}

async function deleteDir() {
  const dirName = document.getElementById("deleteDirName").value;
  await fetch(`${apiUrl}/delete-dir`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dirName }),
  });
  alert("Directory deleted successfully");
}

async function appendToFile() {
  const filename = document.getElementById("appendFileName").value;
  const content = document.getElementById("appendContent").value;
  await fetch(`${apiUrl}/append?filename=${filename}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  alert("Content appended successfully");
}

async function renameFile() {
  const oldName = document.getElementById("oldFileName").value;
  const newName = document.getElementById("newFileName").value;
  await fetch(`${apiUrl}/rename`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ oldName, newName }),
  });
  alert("File renamed successfully");
}
