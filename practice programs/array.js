const heading = document.createElement("h1");
heading.textContent = "Kovan interns";
const table = document.createElement("td");

document.body.appendChild(heading);

const interns = ["Mahadev", "Ragul", "vinith", "Sandhya"];

const modifiedInternsData = interns.map((intern, index) => {
  const temp = {
    name: intern,
    id: index + 1,
  };
  return temp;
});

const found = modifiedInternsData.find((iName) => {
  return iName.name.toLowerCase() == "mahadev";
});

console.log(found);
// console.log(modifiedInternsData);

// const list = document.createElement("ul");
// let sno = 1;
// intern.map((item) => {
//   const namelist = document.createElement("li");
//   namelist.setAttribute("id", `li`);
//   namelist.textContent = sno + item;
//   list.appendChild(namelist);
//   sno += 1;
// });

//.map((str) =>
//   parseInt(intern)
// );
// parseInt("1", 0);
// parseInt("2", 1);
// parseInt("3", 2);
// parseInt("4", 3);

// Array.prototype.map = intern;
// parseInt(intern, "1", 0);
// parseInt("2", 1);
// parseInt("3", 2);
// parseInt("4", 3);
// intern = intern.map(parseInt);
// console.log(intern);

// for (let i = 0; i < intern.length; i++) {
//   const namelist = document.createElement("li");
//   namelist.setAttribute("id", `li{i}`);
//   namelist.textContent = i & intern[i];
//   list.appendChild(namelist);
// }
//document.body.appendChild(list);
