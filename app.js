"use strict";

let mainEl = document.querySelector("main");
let tableEl = document.querySelector("table");
//let customers = 0;
const hoursOfOperation = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

let allStores = [];

//create object constructor

function Store (location, minCustomer, maxCustomer, avgPurchase){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgPurchase = avgPurchase;
  this.hourlySales = [];
  this.totalCookies = 0;
  allStores.push(this);
}

Store.prototype.cookiesPerHour = function () {
  return Math.floor((Math.random() * ((this.maxCustomer - this.minCustomer)+1) + this.minCustomer) * this.avgPurchase);
};


Store.prototype.cookiesPerDay = function (){
  for (let i = 0; i < hoursOfOperation.length; i++){
    let cookiesBought = Math.ceil(this.cookiesPerHour());
    this.hourlySales.push(cookiesBought);
    this.totalCookies = cookiesBought + this.totalCookies;
  }
};

// Store.prototype.simSales = function () {
//   for (let i = 0; i < hoursOfOperation.length; i++) {
//     let sales =
//           hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
//          hourlySales.push(sales);
//   }
// };


Store.prototype.displaySales = function () {
  // let storeTitle = document.createElement("h2");
  // storeTitle.innerText = this.location;
  // mainEl.appendChild(storeTitle);
  //let newList = document.createElement("li");
  this.cookiesPerHour();
  // let newRow = document.createElement('tr');
  // tableEl.appendChild(newRow);
  // let blankHeader = document.createElement('th');
  // blankHeader.innerText = "______";
  // tableEl.appendChild(blankHeader);};
};

function createTable(){
  for (let a = 0; a < allStores.length + 1; a++){
    if (a == 0){
      let newRow = document.createElement('tr');
      tableEl.appendChild(newRow);
      let blankHeader = document.createElement('th');
      blankHeader.innerText = "";
      tableEl.appendChild(blankHeader);
      for (let i = 0; i <hoursOfOperation.length; i++){
        let newTH = document.createElement("th");
        newTH.innerText = hoursOfOperation[i];
        tableEl.appendChild(newTH);}
      let totalTH = document.createElement('th');
      totalTH.innerText="Daily Location Total";
      tableEl.appendChild(totalTH);
    }
    if(a > 0){
      let newRow = document.createElement('tr');
      tableEl.appendChild(newRow);
      let locationHeader = document.createElement('th');
      locationHeader.innerText = allStores[a-1].location;
      tableEl.appendChild(locationHeader);  
      for (let b = 0; b < hoursOfOperation.length; b++) {
        let newTD = document.createElement("td");
        newTD.innerText = allStores[a-1].hourlySales[b];
        tableEl.appendChild(newTD);
      }let totalTD = document.createElement('td');
      totalTD.innerText= allStores[a-1].totalCookies;
      tableEl.appendChild(totalTD);
    }
  }
  let lastRow = document.createElement('tr');
  tableEl.appendChild(lastRow);
  let hourTotals = document.createElement('th');
  hourTotals.innerText = "Totals";
  tableEl.appendChild(hourTotals);
  // for (c = 0; c < hoursOfOperation.length; c++){
  // }
}
//     newItem.innerText = hoursOfOperation[i] + ": " + this.hourlySales[i];
//     console.log(newItem);
//     newList.appendChild(newItem);
//   }
//   mainEl.appendChild(newList);
//   let sumCookies = document.createElement("li");
//   sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
//   newList.appendChild(sumCookies);
// };


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


seattle.cookiesPerHour();
seattle.cookiesPerDay();
//seattle.displaySales();
tokyo.cookiesPerHour();
tokyo.cookiesPerDay();
//tokyo.displaySales();
dubai.cookiesPerHour();
dubai.cookiesPerDay();
dubai.displaySales();
paris.cookiesPerHour();
paris.cookiesPerDay();
//paris.displaySales();
lima.cookiesPerHour();
lima.cookiesPerDay();
//lima.displaySales();
createTable();

// function renderStores(){
//   for(let i = 0; i < allStores.length; i++ ){
//     allStores[i].displaySales();
//   }
// }

//renderStores();
