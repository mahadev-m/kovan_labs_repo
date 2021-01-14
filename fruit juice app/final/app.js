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
    prices = parseInt(document.getElementById(`${prices}`).innerHTML);
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

var countno = document.getElementsByClassName("countNo");
var fruitcount = document.getElementsByClassName("fruitCount");
var hel = document.getElementsByClassName("fruitTotal");
var tSales = document.getElementById("tSales");
var tdaySales = document.getElementById("tdaySales");
var confirmBtn = document.getElementById("confirmBtn");
var temp = 0;
// confirm button event listner
confirmBtn.addEventListener("click", () => {
  var tamp = 0;
  for (let i = 0; i < hel.length; i++) {
    tamp += parseInt(hel[i].innerHTML);
  }
  temp += tamp;
  total.innerHTML = tamp;
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
    sample.setAttribute("id", `r${buttoncount}`);
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

// // Delete row
// function deleteRow(r, bill) {
//   var i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("mytable").deleteRow(i);
//   document.getElementById(bill).remove();
// }
function print() {
  let item = 0;

  for (let i = 0; i < hel.length; i++) {
    countno[i].innerHTML = 0;
    hel[i].innerHTML = 0;
    fruitcount[i].innerHTML = 0;
  }
  for (let i = 1; i < 10; i++) {
    //`${item} ${i}`.counting = 0;
    item1.counting = 0;
    item2.counting = 0;
    item3.counting = 0;
    item4.counting = 0;
    item5.counting = 0;
    item6.counting = 0;
    item7.counting = 0;
    item8.counting = 0;
    item9.counting = 0;
    item10.counting = 0;
  }
  tdaySales.innerText = temp;
  total.innerText = 0;
}
