var arrHead = new Array();
arrHead = [];

// first create a TABLE structure by adding few headers.
function createTable() {
  var fjTable = document.createElement("fruit-basket");
  fjTable.setAttribute("id", "fruit-basket"); // table id.

  var tr = fjTable.insertRow(-1);

  for (var h = 0; h < arrHead.length; h++) {
    var th = document.createElement("th"); // the header object.
    th.innerHTML = arrHead[h];
    tr.appendChild(th);
  }

  var div = document.getElementById("cont");
  div.appendChild(fjTable); // add table to a container.
}

// function to add new row.
function addRow() {
  var fjTab = document.getElementById("fruit-basket");

  var rowCnt = fjTab.rows.length; // get the number of rows.
  var tr = fjTab.insertRow(rowCnt); // table row.
  tr = fjTab.insertRow(rowCnt);

  for (var c = 0; c < arrHead.length; c++) {
    var td = document.createElement("td"); // TABLE DEFINITION.
    td = tr.insertCell(c);

    if (c == 0) {
      // if its the first column of the table.
      // add a button control.
      var button = document.createElement("input");

      // set the attributes.
      button.setAttribute("type", "button");
      button.setAttribute("value", "Remove");

      // add button's "onclick" event.
      button.setAttribute("onclick", "removeRow(this)");

      td.appendChild(button);
    } else {
      // the 2nd, 3rd and 4th column, will have textbox.
      var ele = document.createElement("input");
      ele.setAttribute("type", "text");
      ele.setAttribute("value", "");

      td.appendChild(ele);
    }
  }
}

// function to delete a row.
function removeRow(oButton) {
  var fjTab = document.getElementById("fruit-basket");
  fjTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
}

// function to extract and submit table data.
function submit() {
  var myTab = document.getElementById("fjTable");
  var arrValues = new Array();

  // loop through each row of the table.
  for (row = 1; row < myTab.rows.length - 1; row++) {
    // loop through each cell in a row.
    for (c = 0; c < myTab.rows[row].cells.length; c++) {
      var element = myTab.rows.item(row).cells[c];
      if (element.childNodes[0].getAttribute("type") == "text") {
        arrValues.push("'" + element.childNodes[0].value + "'");
      }
    }
  }

  // finally, show the result in the console.
  console.log(arrValues);
}
function display() {}
