'use strict';

const storeMetaData = {
  hoursOpen: 6,
  hoursClosed: 20,
  storeNames: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki']
};

let customerCalculator = (min, max) => {
  return (Math.floor(Math.random() * max + min));
};

let cookiesAmountCalculator = (customers, averageCookiesSold) => {
  return (Math.floor(customers * averageCookiesSold));
};

let totalCookieSoldCalculator = (cookieSpreadsheet) => {
  return(cookieSpreadsheet.reduce((sumValue, currentValue) => sumValue + currentValue));
};

var firstAndPike = {
  name: storeMetaData.storeNames[0],
  minCustomers: 23,
  maxCustomers: 65,
  averageCookiesSold: 6.3,
  cookiesSold: [],
  cookieSoldCalculator: function() {
    for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed; i++) {
      this.cookiesSold.push(cookiesAmountCalculator(customerCalculator(this.minCustomers, this.maxCustomers), this.averageCookiesSold));
    }
    this.cookiesSold.push(totalCookieSoldCalculator(this.cookiesSold));
  },
};

var seaTac = {
  name: storeMetaData.storeNames[1],
  minCustomers: 3,
  maxCustomers: 24,
  averageCookiesSold: 1.2,
  cookiesSold: [],
  cookieSoldCalculator: function() {
    for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed; i++) {
      this.cookiesSold.push(cookiesAmountCalculator(customerCalculator(this.minCustomers, this.maxCustomers), this.averageCookiesSold));
    }
    this.cookiesSold.push(totalCookieSoldCalculator(this.cookiesSold));
  },
};

var seattleCenter = {
  name: storeMetaData.storeNames[2],
  minCustomers: 11,
  maxCustomers: 38,
  averageCookiesSold: 3.7,
  cookiesSold: [],
  cookieSoldCalculator: function() {
    for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed; i++) {
      this.cookiesSold.push(cookiesAmountCalculator(customerCalculator(this.minCustomers, this.maxCustomers), this.averageCookiesSold));
    }
    this.cookiesSold.push(totalCookieSoldCalculator(this.cookiesSold));
  },
};

var capitolHill = {
  name: storeMetaData.storeNames[3],
  minCustomers: 20,
  maxCustomers: 38,
  averageCookiesSold: 2.3,
  cookiesSold: [],
  cookieSoldCalculator: function() {
    for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed; i++) {
      this.cookiesSold.push(cookiesAmountCalculator(customerCalculator(this.minCustomers, this.maxCustomers), this.averageCookiesSold));
    }
    this.cookiesSold.push(totalCookieSoldCalculator(this.cookiesSold));
  },
};

var alki = {
  name: storeMetaData.storeNames[4],
  minCustomers: 2,
  maxCustomers: 16,
  averageCookiesSold: 4.6,
  cookiesSold: [],
  cookieSoldCalculator: function() {
    for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed; i++) {
      this.cookiesSold.push(cookiesAmountCalculator(customerCalculator(this.minCustomers, this.maxCustomers), this.averageCookiesSold));
    }
    this.cookiesSold.push(totalCookieSoldCalculator(this.cookiesSold));
  },
};

firstAndPike.cookieSoldCalculator();
seaTac.cookieSoldCalculator();
seattleCenter.cookieSoldCalculator();
capitolHill.cookieSoldCalculator();
alki.cookieSoldCalculator();

console.log(firstAndPike);
console.log(seaTac);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);

