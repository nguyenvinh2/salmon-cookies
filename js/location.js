'use strict';

const storeMetaData = {
  hours: '6AM - 8PM',
  storeNames: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
  address: ['85 Pike Street, Seattle, WA 98101', '17801 International Blvd, Seattle, WA 98158', '305 Harrison St, Seattle, WA 98109', '1701 Broadway, Seattle, WA 98122', '1702 Alki Ave SW, Seattle, WA 98127 '],
  phoneNumber: ['(206) 555-5103', '(206) 555-5342', '(206) 555-5763', '(206) 555-5213', '(206) 555-5854'],
};

function createStore() {
  let homeElement = document.getElementById('locations');

  for(let i = 0; i < storeMetaData.storeNames.length; i++) {
    let storeContainer = document.createElement('div');
    let storeNameHeader = document.createElement('h3');
    let hoursOfOperation = document.createElement('p');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');

    storeNameHeader.textContent = 'Store: ' + storeMetaData.storeNames[i];
    hoursOfOperation.textContent = 'Hours: ' + storeMetaData.hours;
    address.textContent = 'Address: ' + storeMetaData.address[i];
    phoneNumber.textContent = 'Phone: ' + storeMetaData.phoneNumber[i];

    storeContainer.appendChild(storeNameHeader);
    storeContainer.appendChild(hoursOfOperation);
    storeContainer.appendChild(address);
    storeContainer.appendChild(phoneNumber);

    homeElement.appendChild(storeContainer);
  }
}

createStore();
