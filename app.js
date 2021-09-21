"use strict";

let mainEl = document.querySelector("main");
let customers = 0;
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
//create objects for stores

let seattleStore = {
  minCustomer: 23,
  maxCustomer: 65,
  avgPurchase: 6.3,
  hourlySales: [],
  totalCookies: 0,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
    this.totalCookies = cookiesBought + this.totalCookies;
    return cookiesBought;
  },
  simSales: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let sales =
        hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
      this.hourlySales.push(sales);
    }
    console.log(seattleStore.hourlySales);
  },
  displaySales: function () {
    this.simSales();
    let storeTitle = document.createElement("h2");
    storeTitle.innerText = "Seattle Store";
    mainEl.appendChild(storeTitle);
    let newList = document.createElement("ul");
    for (let i = 0; i < this.hourlySales.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = `${this.hourlySales[i]}`;
      console.log(newItem);
      newList.appendChild(newItem);
    }
    mainEl.appendChild(newList);
    let sumCookies = document.createElement("li");
    sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
    newList.appendChild(sumCookies);
  },
};

let tokyoStore = {
  minCustomer: 3,
  maxCustomer: 24,
  avgPurchase: 1.2,
  hourlySales: [],
  totalCookies: 0,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = cookiesBought + this.totalCookies;
    }
    console.log(this.totalCookies);
    return cookiesBought;
  },
  simSales: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let sales =
        hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
      this.hourlySales.push(sales);
    }
    console.log(tokyoStore.hourlySales);
  },
  displaySales: function () {
    this.simSales();
    let storeTitle = document.createElement("h2");
    storeTitle.innerText = "Tokyo Store";
    mainEl.appendChild(storeTitle);
    let newList = document.createElement("ul");
    for (let i = 0; i < this.hourlySales.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = `${this.hourlySales[i]}`;
      console.log(newItem);
      newList.appendChild(newItem);
    }
    mainEl.appendChild(newList);
    let sumCookies = document.createElement("li");
    sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
    newList.appendChild(sumCookies);
  },
};

let dubaiStore = {
  minCustomer: 11,
  maxCustomer: 38,
  avgPurchase: 3.7,
  hourlySales: [],
  totalCookies: 0,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = cookiesBought + this.totalCookies;
    }
    console.log(this.totalCookies);
    return cookiesBought;
  },
  simSales: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let sales =
        hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
      this.hourlySales.push(sales);
    }
    console.log(dubaiStore.hourlySales);
  },
  displaySales: function () {
    this.simSales();
    let storeTitle = document.createElement("h2");
    storeTitle.innerText = "Dubai Store";
    mainEl.appendChild(storeTitle);
    let newList = document.createElement("ul");
    for (let i = 0; i < this.hourlySales.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = `${this.hourlySales[i]}`;
      console.log(newItem);
      newList.appendChild(newItem);
    }
    mainEl.appendChild(newList);
    let sumCookies = document.createElement("li");
    sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
    newList.appendChild(sumCookies);
  },
};

let parisStore = {
  minCustomer: 20,
  maxCustomer: 38,
  avgPurchase: 2.3,
  hourlySales: [],
  totalCookies: 0,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = cookiesBought + this.totalCookies;
    }
    console.log(this.totalCookies);
    return cookiesBought;
  },
  simSales: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let sales =
        hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
      this.hourlySales.push(sales);
    }
    console.log(parisStore.hourlySales);
  },
  displaySales: function () {
    this.simSales();
    let storeTitle = document.createElement("h2");
    storeTitle.innerText = "Paris Store";
    mainEl.appendChild(storeTitle);
    let newList = document.createElement("ul");
    for (let i = 0; i < this.hourlySales.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = `${this.hourlySales[i]}`;
      console.log(newItem);
      newList.appendChild(newItem);
    }
    mainEl.appendChild(newList);
    let sumCookies = document.createElement("li");
    sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
    newList.appendChild(sumCookies);
  },
};

let limaStore = {
  minCustomer: 2,
  maxCustomer: 16,
  avgPurchase: 4.6,
  hourlySales: [],
  totalCookies: 0,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
    for (let i = 0; i < hoursOfOperation.length; i++) {
      this.totalCookies = cookiesBought + this.totalCookies;
    }
    console.log(this.totalCookies);
    return cookiesBought;
  },
  simSales: function () {
    for (let i = 0; i < hoursOfOperation.length; i++) {
      let sales =
        hoursOfOperation[i] + ": " + this.cookiesPerHour() + " cookies";
      this.hourlySales.push(sales);
    }
    console.log(limaStore.hourlySales);
  },
  displaySales: function () {
    this.simSales();
    let storeTitle = document.createElement("h2");
    storeTitle.innerText = "Lima Store";
    mainEl.appendChild(storeTitle);
    let newList = document.createElement("ul");
    for (let i = 0; i < this.hourlySales.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = `${this.hourlySales[i]}`;
      console.log(newItem);
      newList.appendChild(newItem);
    }
    mainEl.appendChild(newList);
    let sumCookies = document.createElement("li");
    sumCookies.innerText = "Total: " + this.totalCookies + " cookies";
    newList.appendChild(sumCookies);
  },
};

seattleStore.displaySales();
tokyoStore.displaySales();
dubaiStore.displaySales();
parisStore.displaySales();
limaStore.displaySales();
