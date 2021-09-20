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
    console.log(seattleStore.hourlySales);
  },
  displaySales: function () {
    this.simSales();
    let storeTitle = document.createElement("h2");
    storeTitle.textContent = "Seattle Store";
    let newList = document.createElement("ul");
    for (let i = 0; i < this.hourlySales.length; i++) {
      let newItem = document.createElement("li");
      newItem.innerText = `${this.hourlySales[i]}`;
      console.log(newItem);
      newList.appendChild(newItem);
    }
    mainEl.appendChild(newList);
    let sumCookies = document.createElement("li");
    sumCookies.textContent = "Total: " + mainEl.appendChild(this.totalCookies);
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
};
