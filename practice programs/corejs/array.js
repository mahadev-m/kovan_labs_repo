const heading = document.createElement("h1");
heading.textContent = "Kovan interns";
document.body.appendChild(heading);

const intern = ["Mahadev", "Ragul", "vinith", "Sandhya"];
const list = document.createElement("ul");
for (let i = 0; i < intern.length; i++) {
  const namelist = document.createElement("li");
  namelist.setAttribute("id", `li{i}`);
  namelist.textContent = intern[i];
  list.appendChild(namelist);
}
document.body.appendChild(list);
