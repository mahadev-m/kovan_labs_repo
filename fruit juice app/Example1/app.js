var fruitList = [];
var fruitListIdCounter = 0;
var selectedJuiceId = 0;

function saveFruit(data) {
  fruitList.push(data);
  console.log(fruitList);
}

function btnSaveClick(e) {
  fruitListIdCounter = fruitListIdCounter + 1;

  let data = {
    id: fruitListIdCounter,
    name: document.getElementById("txtJuiceName").value,
    price: 1,
  };
  saveFruit(data);
  clearData();
  displayJuiceList();
}

function btnUpdateClick(e) {
  fruitList.map((item) => {
    if (item.id === selectedJuiceId) {
      item.name = document.getElementById("txtJuiceName").value;
    }
  });
  clearData();
  displayJuiceList();
}

function clearData() {
  selectedJuiceId = 0;
  document.getElementById("txtJuiceName").value = "";

  let saveButton = document.getElementById("btnSave");
  saveButton.disabled = false;
  let updateButton = document.getElementById("btnUpdate");
  updateButton.disabled = true;
}

function displayJuiceList() {
  let table = document
    .getElementById("tblJuiceList")
    .getElementsByTagName("tbody")[0];

  for (var i = table.rows.length - 1; i >= 0; i--) {
    table.deleteRow(i);
  }

  fruitList.map((item) => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    cell1.innerHTML = item.name;
    //Edit
    let editCell = row.insertCell(1);
    let editBbutton = document.createElement("button");
    editBbutton.innerHTML = "Edit";
    editBbutton.setAttribute("type", "button");
    editBbutton.setAttribute("onclick", "editJuice(" + item.id + ")");
    editCell.appendChild(editBbutton);
    //Delete
    let deleteCell = row.insertCell(2);
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("onclick", "deleteJuice(" + item.id + ")");
    deleteCell.appendChild(deleteButton);
  });
}

function editJuice(id) {
  selectedJuiceId = id;
  let saveButton = document.getElementById("btnSave");
  saveButton.disabled = true;
  let updateButton = document.getElementById("btnUpdate");
  updateButton.disabled = false;

  let filterResult = fruitList.filter((x) => x.id == id)[0];
  document.getElementById("txtJuiceName").value = filterResult.name;
}

function deleteJuice(id) {
  fruitList = fruitList.filter((x) => x.id != id);
  displayJuiceList();
}

function initJuiceList() {
  let table = document.getElementById("tblJuiceList");
  let header = table.createTHead();
  let headerRow = header.insertRow(0);
  let headerCell1 = headerRow.insertCell(0);
  headerCell1.innerHTML = "Juice";
  let headerCell2 = headerRow.insertCell(1);
  headerCell2.innerHTML = "Price";
  table.createTBody();
}
