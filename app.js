"use strict";

let mainEl = document.querySelector("main");
let tableEl = document.querySelector("table");

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

function createTable(){
  mainEl.appendChild(tableEl);
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
}

function finalRow(){
  let lastRow = document.createElement('tr');
  tableEl.appendChild(lastRow);
  let hourTotals = document.createElement('th');
  hourTotals.innerText = "Totals";
  tableEl.appendChild(hourTotals);
  //for each hour in store hours
  let grandTotal = 0;
  for (let hour = 0; hour < hoursOfOperation.length; hour++){
  //for every hour sum the sales totals for every store
    let sum = 0;
    for (let store = 0; store < allStores.length; store++){
      sum = sum + allStores[store].hourlySales[hour];
      grandTotal = grandTotal + allStores[store].hourlySales[hour];
    }let sumTD = document.createElement('td');
    sumTD.innerText = sum;
    tableEl.appendChild(sumTD);
  } let totalTD = document.createElement('td');
  totalTD.innerText = grandTotal;
  tableEl.appendChild(totalTD);
}


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


seattle.cookiesPerHour();
seattle.cookiesPerDay();

tokyo.cookiesPerHour();
tokyo.cookiesPerDay();

dubai.cookiesPerHour();
dubai.cookiesPerDay();

paris.cookiesPerHour();
paris.cookiesPerDay();

lima.cookiesPerHour();
lima.cookiesPerDay();



createTable();
finalRow();

let formEl = document.getElementById("newStoreForm");
formEl.addEventListener('submit', submitForm);

//make variable for form element



function submitForm(formSubmission){
  formSubmission.preventDefault();

  let location = formSubmission.target.locationName.value;
  let minCust = formSubmission.target.minCustomer.value;
  let maxCust = formSubmission.target.maxCustomer.value;
  let avgPurchase = formSubmission.target.avgPurch.value;

  let store = new Store(location, minCust, maxCust, avgPurchase);
  console.log(store);

  store.cookiesPerHour();
  store.cookiesPerDay();

  tableEl.innerHTML = '';

  createTable();
  finalRow();
}
formEl.addEventListener('submit', submitForm);