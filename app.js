"use strict";

//create objects for stores
let customers = 0;
let seattleStore = {
  minCustomer: 23,
  maxCustomer: 65,
  avgPurchase: 6.3,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = customers * this.avgPurchase;
    return Math.ceil(cookiesBought);
  },
};

let tokyoStore = {
  minCustomer: 3,
  maxCustomer: 24,
  avgPurchase: 1.2,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = customers * this.avgPurchase;
    return Math.ceil(cookiesBought);
  },
};

let dubaiStore = {
  minCustomer: 11,
  maxCustomer: 38,
  avgPurchase: 3.7,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = customers * this.avgPurchase;
    return Math.ceil(cookiesBought);
  },
};

let parisStore = {
  minCustomer: 20,
  maxCustomer: 38,
  avgPurchase: 2.3,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = customers * this.avgPurchase;
    return Math.ceil(cookiesBought);
  },
};

let limaStore = {
  minCustomer: 2,
  maxCustomer: 16,
  avgPurchase: 4.6,
  custPerHour: function () {
    customers = Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
    return customers;
  },
  cookiesPerHour: function () {
    this.custPerHour();
    let cookiesBought = customers * this.avgPurchase;
    return Math.ceil(cookiesBought);
  },
};
