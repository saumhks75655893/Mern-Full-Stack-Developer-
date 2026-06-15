// item list
const items = [
  {
    id: "001",
    item_image: "images/image/1.jpg",
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    company_name: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    current_price: 606,
    original_price: 1045,
    discount_percentage: 42,
  },

  {
    id: "002",
    item_image: "images/image/2.jpg",
    rating: {
      stars: 4.3,
      noOfReviews: 24,
    },
    company_name: "Cukoo",
    item_name: "Women Padded Halter Neck Swimming Shout",
    current_price: 700,
    original_price: 1599,
    discount_percentage: 55,
  },

  {
    id: "003",
    item_image: "images/image/3.jpg",
    rating: {
      stars: 4.1,
      noOfReviews: 249,
    },
    company_name: "Nuevosdamas",
    item_name: "Women Red & White Printed A-Line",
    current_price: 430,
    original_price: 899,
    discount_percentage: 25,
  },

  {
    id: "004",
    item_image: "images/image/4.jpg",
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    company_name: "Adidas",
    item_name: "Indian Cricket ODI T-shirt",
    current_price: 999,
    original_price: 1500,
    discount_percentage: 47,
  },
  {
    id: "005",
    item_image: "images/image/5.jpg",
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    company_name: "Roadster",
    item_name: "Pure Cotton T-shirt",
    current_price: 489,
    original_price: 1399,
    discount_percentage: 65,
  },
  {
    id: "006",
    item_image: "images/image/6.jpg",
    rating: {
      stars: 0.0,
      noOfReviews: 0,
    },
    company_name: "Nike",
    item_name: "Men ReactX Running Shoes",
    current_price: 14995,
    original_price: 14995,
    discount_percentage: 0,
  },
  {
    id: "007",
    item_image: "images/image/7.jpg",
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    company_name: "The Indian Garage Co",
    item_name: "Men Slim Fit Regular Short",
    current_price: 639,
    original_price: 1599,
    discount_percentage: 60,
  },
  {
    id: "008",
    item_image: "images/image/8.jpg",
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    company_name: "Nivea",
    item_name: "Nivea Fresh Active Mushchuriser For Men",
    current_price: 606,
    original_price: 1045,
    discount_percentage: 42,
  },
  {
    id: "009",
    item_image: "images/image/9.jpg",
    rating: {
      stars: 4.5,
      noOfReviews: 2500,
    },
    company_name: "Sunglass",
    item_name: "Unisex Aviator Sunglasses",
    current_price: 1291,
    original_price: 3690,
    discount_percentage: 65,
  },
];



let bagItems;
onLoad(); 

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems'); 
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []; 
  displayItemOnHomePage();
  displayBagItemCount();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems)); 
  displayBagItemCount();
}

function displayBagItemCount() {
  let bagItemCountElement = document.querySelector(".bag-items-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}


function displayItemOnHomePage() {
  let itemsContainerElement = document.querySelector(".items-container");


  if(!itemsContainerElement){
    return;
  }
  let innerHTML = "";

  items.forEach((item) => {
    innerHTML += `  <div class="item-container">
                        <img class="item-image" src="${item.item_image}" alt="Item image">
                        <div class="rating">
                          ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
                        </div>
                        <div class="company-name">${item.company_name}</div>
                        <div class="item-name">${item.item_name}</div>
                        <div class="price">                                           <span class="current-       price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                        </div>
                      <button class="btn-add-bag" onclick="addToBag(${item.id});">Add To Bag</button>
                  </div>
                  `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
