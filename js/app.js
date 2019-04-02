'use strict';

const storeMetaData = {
  hoursOpen: 6,
  hoursClosed: 19,
  storeNames: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
  minCustomers: [23, 3, 11, 20, 2],
  maxCustomers: [65, 24, 38, 38, 16],
  averageCookiesSold: [6.3, 1.2, 3.7, 2.3, 4.6]
};

let customerCalculator = (min, max) => {
  return (Math.ceil((Math.random() * (max - min) + min)));
};

let cookiesAmountCalculator = (customers, averageCookiesSold) => {
  return (Math.floor(customers * averageCookiesSold));
};

let totalCookieSoldCalculator = (cookieSpreadsheet) => {
  return (cookieSpreadsheet.reduce((sumValue, currentValue) => sumValue + currentValue));
};

function StoreConstructor(storeName, customersMin, customersMax, cookiesSold) {
  this.name = storeName;
  this.minCustomers = customersMin;
  this.maxCustomers = customersMax;
  this.averageCookiesSold = cookiesSold;
  this.cookiesSold = [];
  this.cookieSoldCalculator = () => {
    for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed; i++) {
      this.cookiesSold.push(cookiesAmountCalculator(customerCalculator(this.minCustomers, this.maxCustomers), this.averageCookiesSold));
    }
    this.cookiesSold.push(totalCookieSoldCalculator(this.cookiesSold));
  };
}

function generateStores(storeList) {
  let totalStore = new StoreConstructor('Total',0,0,0);
  totalStore.cookieSoldCalculator();
  let listOfStores = [];
  for (let i = 0; i < storeList.storeNames.length; i++) {
    let storeInital = new StoreConstructor(storeList.storeNames[i], storeList.minCustomers[i], storeList.maxCustomers[i], storeList.averageCookiesSold[i]);
    storeInital.cookieSoldCalculator();
    listOfStores.push(storeInital);
    totalStore.cookiesSold = totalStore.cookiesSold.map((element, index) => element + storeInital.cookiesSold[index]);
  }
  listOfStores.push(totalStore);
  return listOfStores;
}

let listOfStores = generateStores(storeMetaData);
console.log(listOfStores);

function generateSalesList(storeList) {
  let allSalesContainer = document.getElementById('sales');
  let salesContainer = document.createElement('div');
  let salesTable = document.createElement('table');
  allSalesContainer.appendChild(salesContainer);
  salesContainer.appendChild(salesTable);

  for (let i = -1; i < storeList.length; i++) {
    let salesRow = document.createElement('tr');
    if (i === -1) {
      createTableHeader(salesRow);
    } else {
      storeList[i].render(salesRow);
    }
    salesTable.appendChild(salesRow);
  }
}

StoreConstructor.prototype.render = function(salesRow) {
  if (this.cookiesSold.length < 1) {
    console.log('The sales total cannot be rendered because there is nothing in the sales array');
  } else {
    for (let i = storeMetaData.hoursOpen - 1; i <= storeMetaData.hoursClosed + 1; i++) {
      let salesItem = document.createElement('td');
      if (i === storeMetaData.hoursOpen - 1) {
        salesItem.textContent = this.name;
      } else {
        salesItem.textContent = this.cookiesSold[i - storeMetaData.hoursOpen];
      }
      salesRow.appendChild(salesItem);
    }
  }
};

function createTableHeader(salesRow) {
  for (let i = storeMetaData.hoursOpen; i <= storeMetaData.hoursClosed + 2; i++) {
    let salesHeader = document.createElement('th');
    if (i === storeMetaData.hoursOpen) {
      salesHeader.textContent = 'Store Name';
    } else {
      if (i < 13) {
        salesHeader.textContent = `${i - 1}AM`;
      } else if (i === 13) {
        salesHeader.textContent = '12PM';
      }
      else if (i === storeMetaData.hoursClosed + 2) {
        salesHeader.textContent = 'Daily Total';
      }
      else {
        salesHeader.textContent = `${i - 13}PM`;
      }
    }
    salesRow.appendChild(salesHeader);
  }
}

generateSalesList(listOfStores);
