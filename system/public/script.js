const apiUrl = "http://localhost:3000/api";

async function readFile(params) {
  const filename = document.getElementById("readFileName").values;

  const response = await fetch(`${apiUrl}/read?file=${filename}`);
  const data = await response.json();

  document.getElementById("readContent").innerHTML = data.content || data.error;
}
async function writeFile(params) {
  const filename = document.getElementById("readFileName").values;

  const response = await fetch(`${apiUrl}/read?file=${filename}`);
  const data = await response.json();

  document.getElementById("readContent").innerHTML = data.content || data.error;
}
