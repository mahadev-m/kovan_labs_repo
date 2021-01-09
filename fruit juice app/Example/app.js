function addrow() {
  var SNo = document.getElementById("txtbox1").value;
  var JuiceName = document.getElementById("txtbox2").value;
  var Amount = document.getElementById("txtbox3").value;

  var table = document.getElementById("mytable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = SNo;
  cell2.innerHTML = JuiceName;
  cell3.innerHTML = Amount;
  cell4.innerHTML = '<button type="button">Edit</button>';
  clear();
}

function clear() {
  document.getElementById("txtbox1").value = "";
}

function edit() {}
