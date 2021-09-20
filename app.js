"use strict";

//create objects for stores

let seattleStore = {
  minCustomer: 23,
  maxCustomer: 65,
  avgPurchase: 6.3,
  custPerHour: function () {
    return Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
  },
};

let tokyoStore = {
  minCustomer: 3,
  maxCustomer: 24,
  avgPurchase: 1.2,
  custPerHour: function () {
    return Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
  },
};

let dubaiStore = {
  minCustomer: 11,
  maxCustomer: 38,
  avgPurchase: 3.7,
  custPerHour: function () {
    return Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
  },
};

let parisStore = {
  minCustomer: 20,
  maxCustomer: 38,
  avgPurchase: 2.3,
  custPerHour: function () {
    return Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
  },
};

let limaStore = {
  minCustomer: 2,
  maxCustomer: 16,
  avgPurchase: 4.6,
  custPerHour: function () {
    return Math.floor(
      Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer
    );
  },
};
