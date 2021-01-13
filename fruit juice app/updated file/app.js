// Total
let total = document.getElementById("total");
var totalAmt = 0;
let sum = 0;
// count intializing
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let clear = document.getElementById("clearBtn");

class items {
  constructor(counting) {
    this.counting = counting;
  }

  noItems(btn, countDisplay, num, tot, prices) {
    // add button
    btn = document.getElementById(`${btn}`);
    // no of juices
    countDisplay = document.getElementById(`${countDisplay}`);
    // no of count in billing area
    num = document.getElementById(`${num}`);
    // get the id of multiply of no of juices
    tot = document.getElementById(`${tot}`);
    // price of the juice
    prices = parseInt(document.getElementById(`${prices}`).innerText);
    // on click increase the count
    countDisplay.innerHTML = ++this.counting;
    // multiply of no of juices
    tot.innerHTML = parseInt(countDisplay.innerText) * prices;
    num.innerHTML = countDisplay.innerHTML;
  }
}
var item1 = new items(count1);
var item2 = new items(count2);
var item3 = new items(count3);
var item4 = new items(count4);
var item5 = new items(count5);
var item6 = new items(count6);
var item7 = new items(count7);
var item8 = new items(count8);
var item9 = new items(count9);
var item10 = new items(count10);
// class completed

// clearing function
var temp = 0;
var salesToday = 0;
var tSales = document.getElementById("tSales");
var tdaySales = document.getElementById("tdaySales");
var confirmBtn = document.getElementById("confirmBtn");
confirmBtn.addEventListener("click", () => {
  totalAmt =
    parseInt(t1.innerText) +
    parseInt(t2.innerText) +
    parseInt(t3.innerText) +
    parseInt(t4.innerText) +
    parseInt(t5.innerText);
  total.innerHTML = totalAmt;
  salesToday += totalAmt;
  tdaySales.innerText = salesToday;
  localStorage.setItem("total", salesToday);
  document.getElementById("tSales").innerHTML = localStorage.getItem("total");

  setTimeout(function () {
    c1.innerHTML = 0;
    c2.innerHTML = 0;
    c3.innerHTML = 0;
    c4.innerHTML = 0;
    c5.innerHTML = 0;
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    t1.innerHTML = 0;
    t2.innerHTML = 0;
    t3.innerHTML = 0;
    t4.innerHTML = 0;
    t5.innerHTML = 0;

    n1.innerHTML = 0;
    n2.innerHTML = 0;
    n3.innerHTML = 0;
    n4.innerHTML = 0;
    n5.innerHTML = 0;
    total.innerText = 0;
  }, 20000);
});

// add Functions
let buttoncount = 6;
function adding(fruit, newprice, table, billamo) {
  let fruits = document.getElementById(fruit).value;
  let newprices = parseInt(document.getElementById(newprice).value);
  let mytable = document.getElementById(table);
  let addbill = document.getElementById(billamo);

  if (fruits === "") {
  } else {
    let p = document.createElement("p");
    p.setAttribute("id", `j${buttoncount}`);
    p.innerHTML = `${fruits}<span class="fruitCount" id="n${buttoncount}">0</span> <span class="fruitTotal" id="t${buttoncount}">0</span><hr><br>`;
    addbill.appendChild(p);

    var sample = mytable.insertRow(-1);
    sample.setAttribute("id", `r${6}`);
    var cell0 = sample.insertCell(0);
    var cell1 = sample.insertCell(1);
    var cell2 = sample.insertCell(2);
    var cell3 = sample.insertCell(3);
    var cell4 = sample.insertCell(4);

    cell1.innerHTML = fruits;
    cell2.setAttribute("id", `p${buttoncount}`);
    cell2.innerHTML = newprices;
    cell3.setAttribute("id", `c${buttoncount}`);
    cell3.innerHTML = "0";
    cell4.innerHTML = `<button onclick="item${buttoncount}.noItems('btn${buttoncount}','c${buttoncount}','t${buttoncount}','p${buttoncount}')" id="btn${buttoncount}">Add</button>`;
    ++buttoncount;
    console.log(cell4);
  }
}
// Delete row
function deleteRow(r, bill) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
  document.getElementById(bill).remove();
}
