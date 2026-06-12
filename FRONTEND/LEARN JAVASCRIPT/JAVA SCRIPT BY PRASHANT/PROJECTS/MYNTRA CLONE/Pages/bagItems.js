let bagItemObject;
onload();

// each function loader function 
function onload() {
  loadBagItemObject();
  displayBagItems();
  displayBagSummary(); 
}

// bag item object loader from bagItem object
function loadBagItemObject() {
  console.log(bagItems);
  bagItemObject = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });

  console.log(bagItemObject);
}

// display bag item to the page
function displayBagItems() {
  let bagContainerElement = document.querySelector(".bag-page");
  let innerHTML = "";
  bagItemObject.forEach((bagItems) => {
    innerHTML += generateItem(bagItems);
  });
  bagContainerElement.innerHTML = innerHTML;
}

// function for remove item from bag
function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems)); 
  loadBagItemObject(); 
  displayBagItems(); 
  displayBagItemCount(); 
  displayBagSummary();

}

// function for generate all items one by one from the bagItem array id
function generateItem(item) {
  return `<div class="bag-item-container">
              <div class="item-left-part">
                <img src="../${item.item_image}" alt="bag-item-image" class="bag-item-image">
              </div>
              <div class="item-right-part">
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price"> 
                  <span class="current-price">Rs ${item.current_price}</span>
                  <span class="original-price">Rs ${item.original_price}</span>
                  <span class="discount">(${item.discount_percentage}% OFF)</span>
                </div>
                <div class="return-period">
                  <span class="return-period-days">14 days</span>
                  return available
                </div>
                <div class="delivery-detail">
                  Delivery by
                  <span class="delivery-detail-days">10 feb 2025</span>
                </div>
              </div>
              <div class="remove-from-cart" onclick="removeFromBag(${item.id});"> X </div>
          </div>
  `;
}


// all the summary of how much money to pay for the items
function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.bag-summary');
  const CONVENIENCE_FEE = 99; 
  let totalItem = bagItemObject.length; 
  let totalMRP = 0; 
  let totalDiscount = 0; 


  bagItemObject.forEach(item => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price; 
  })

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE; 

  bagSummaryElement.innerHTML = `
         <div class="bag-details-container">

            <div class="price-header">PRICE DETAILS (${totalItem} ITEMS)</div>

            <div class="price-item">
              <span class="price-item-tag">TOTAL MRP</span>
              <span class="price-item-value">₹${totalMRP}</span>
            </div>

            <div class="price-item">
              <span class="price-item-tag">Discount On MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
            </div>

            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹${finalPayment}</span>
            </div>
        </div>

        <button class="btn-place-order">
          PLACE ORDER
        </button>
  `;
}
