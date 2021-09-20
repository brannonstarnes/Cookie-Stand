"use strict";

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
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
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
};

let tokyoStore = {
  minCustomer: 3,
  maxCustomer: 24,
  avgPurchase: 1.2,
  hourlySales: [],
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
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
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
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
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
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
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = Math.ceil(customers * this.avgPurchase);
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
