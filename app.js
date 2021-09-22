"use strict";

let mainEl = document.querySelector("main");
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
  return Math.floor(Math.random() * ((this.maxCustomer - this.minCustomer)+1) + this.minCustomer * this.avgPurchase);
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
  let storeTitle = document.createElement("h2");
  storeTitle.innerText = this.location;
  mainEl.appendChild(storeTitle);
  let newList = document.createElement("ul");
  this.cookiesPerHour();
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let newItem = document.createElement("li");
    newItem.innerText = hoursOfOperation[i] + ": " + this.hourlySales[i];
    console.log(newItem);
    newList.appendChild(newItem);
  }
  mainEl.appendChild(newList);
  let sumCookies = document.createElement("li");
  sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
  newList.appendChild(sumCookies);
};


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


seattle.cookiesPerHour();
seattle.cookiesPerDay();
seattle.displaySales();
tokyo.cookiesPerHour();
tokyo.cookiesPerDay();
tokyo.displaySales();
dubai.cookiesPerHour();
dubai.cookiesPerDay();
dubai.displaySales();
paris.cookiesPerHour();
paris.cookiesPerDay();
paris.displaySales();
lima.cookiesPerHour();
lima.cookiesPerDay();
lima.displaySales();

function renderStores(){
  for(let i = 0; i < allStores.length; i++ ){
    allStores[i].displaySales();
  }
}

renderStores();

// let seattleStore = {
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgPurchase: 6.3,
//   hourlySales: [],
//   totalCookies: 0,
//   custPerHour: function () {
//     customers = Math.floor(
//       Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
//     );
//     return customers;
//   },
//   cookiesPerHour: function () {
//     this.custPerHour();
//     let cookiesBought = Math.ceil(customers * this.avgPurchase);
//     this.totalCookies = cookiesBought + this.totalCookies;
//     return cookiesBought;
//   },
//   simSales: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let sales =
//         hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
//       this.hourlySales.push(sales);
//     }
//     console.log(seattleStore.hourlySales);
//   },
//   displaySales: function () {
//     this.simSales();
//     let storeTitle = document.createElement("h2");
//     storeTitle.innerText = "Seattle Store";
//     mainEl.appendChild(storeTitle);
//     let newList = document.createElement("ul");
//     for (let i = 0; i < this.hourlySales.length; i++) {
//       let newItem = document.createElement("li");
//       newItem.innerText = `${this.hourlySales[i]}`;
//       console.log(newItem);
//       newList.appendChild(newItem);
//     }
//     mainEl.appendChild(newList);
//     let sumCookies = document.createElement("li");
//     sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
//     newList.appendChild(sumCookies);
//   },
// };

// let tokyoStore = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgPurchase: 1.2,
//   hourlySales: [],
//   totalCookies: 0,
//   custPerHour: function () {
//     customers = Math.floor(
//       Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
//     );
//     return customers;
//   },
//   cookiesPerHour: function () {
//     this.custPerHour();
//     let cookiesBought = Math.ceil(customers * this.avgPurchase);
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.totalCookies = cookiesBought + this.totalCookies;
//     }
//     console.log(this.totalCookies);
//     return cookiesBought;
//   },
//   simSales: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let sales =
//         hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
//       this.hourlySales.push(sales);
//     }
//     console.log(tokyoStore.hourlySales);
//   },
//   displaySales: function () {
//     this.simSales();
//     let storeTitle = document.createElement("h2");
//     storeTitle.innerText = "Tokyo Store";
//     mainEl.appendChild(storeTitle);
//     let newList = document.createElement("ul");
//     for (let i = 0; i < this.hourlySales.length; i++) {
//       let newItem = document.createElement("li");
//       newItem.innerText = `${this.hourlySales[i]}`;
//       console.log(newItem);
//       newList.appendChild(newItem);
//     }
//     mainEl.appendChild(newList);
//     let sumCookies = document.createElement("li");
//     sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
//     newList.appendChild(sumCookies);
//   },
// };

// let dubaiStore = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgPurchase: 3.7,
//   hourlySales: [],
//   totalCookies: 0,
//   custPerHour: function () {
//     customers = Math.floor(
//       Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
//     );
//     return customers;
//   },
//   cookiesPerHour: function () {
//     this.custPerHour();
//     let cookiesBought = Math.ceil(customers * this.avgPurchase);
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.totalCookies = cookiesBought + this.totalCookies;
//     }
//     console.log(this.totalCookies);
//     return cookiesBought;
//   },
//   simSales: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let sales =
//         hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
//       this.hourlySales.push(sales);
//     }
//     console.log(dubaiStore.hourlySales);
//   },
//   displaySales: function () {
//     this.simSales();
//     let storeTitle = document.createElement("h2");
//     storeTitle.innerText = "Dubai Store";
//     mainEl.appendChild(storeTitle);
//     let newList = document.createElement("ul");
//     for (let i = 0; i < this.hourlySales.length; i++) {
//       let newItem = document.createElement("li");
//       newItem.innerText = `${this.hourlySales[i]}`;
//       console.log(newItem);
//       newList.appendChild(newItem);
//     }
//     mainEl.appendChild(newList);
//     let sumCookies = document.createElement("li");
//     sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
//     newList.appendChild(sumCookies);
//   },
// };

// let parisStore = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgPurchase: 2.3,
//   hourlySales: [],
//   totalCookies: 0,
//   custPerHour: function () {
//     customers = Math.floor(
//       Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
//     );
//     return customers;
//   },
//   cookiesPerHour: function () {
//     this.custPerHour();
//     let cookiesBought = Math.ceil(customers * this.avgPurchase);
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.totalCookies = cookiesBought + this.totalCookies;
//     }
//     console.log(this.totalCookies);
//     return cookiesBought;
//   },
//   simSales: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let sales =
//         hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
//       this.hourlySales.push(sales);
//     }
//     console.log(parisStore.hourlySales);
//   },
//   displaySales: function () {
//     this.simSales();
//     let storeTitle = document.createElement("h2");
//     storeTitle.innerText = "Paris Store";
//     mainEl.appendChild(storeTitle);
//     let newList = document.createElement("ul");
//     for (let i = 0; i < this.hourlySales.length; i++) {
//       let newItem = document.createElement("li");
//       newItem.innerText = `${this.hourlySales[i]}`;
//       console.log(newItem);
//       newList.appendChild(newItem);
//     }
//     mainEl.appendChild(newList);
//     let sumCookies = document.createElement("li");
//     sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
//     newList.appendChild(sumCookies);
//   },
// };

// let limaStore = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgPurchase: 4.6,
//   hourlySales: [],
//   totalCookies: 0,
//   custPerHour: function () {
//     customers = Math.floor(
//       Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
//     );
//     return customers;
//   },
//   cookiesPerHour: function () {
//     this.custPerHour();
//     let cookiesBought = Math.ceil(customers * this.avgPurchase);
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       this.totalCookies = cookiesBought + this.totalCookies;
//     }
//     console.log(this.totalCookies);
//     return cookiesBought;
//   },
//   simSales: function () {
//     for (let i = 0; i < hoursOfOperation.length; i++) {
//       let sales =
//         hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
//       this.hourlySales.push(sales);
//     }
//     console.log(limaStore.hourlySales);
//   },
//   displaySales: function () {
//     this.simSales();
//     let storeTitle = document.createElement("h2");
//     storeTitle.innerText = "Lima Store";
//     mainEl.appendChild(storeTitle);
//     let newList = document.createElement("ul");
//     for (let i = 0; i < this.hourlySales.length; i++) {
//       let newItem = document.createElement("li");
//       newItem.innerText = `${this.hourlySales[i]}`;
//       console.log(newItem);
//       newList.appendChild(newItem);
//     }
//     mainEl.appendChild(newList);
//     let sumCookies = document.createElement("li");
//     sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
//     newList.appendChild(sumCookies);
//   },
// };

// seattleStore.displaySales();
// tokyoStore.displaySales();
// dubaiStore.displaySales();
// parisStore.displaySales();
// limaStore.displaySales();