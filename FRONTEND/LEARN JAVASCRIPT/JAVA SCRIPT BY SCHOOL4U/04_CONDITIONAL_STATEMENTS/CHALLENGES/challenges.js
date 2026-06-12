// Challenge-1:  Write a program where:
/*
1. If the cart value is less than $50, no discount is applied.
2. If the cart value is between $50 and $100, apply a 10% discount.
3. If the cart value is more than $100, apply a 20% discount.
Display the final cart total after the discount.
*/

let cartValue = 120;
let finalCartValue;

if (cartValue < 50) {
  finalCartValue = cartValue;
  console.log("No discount applied");
} else if (cartValue >= 50 && cartValue <= 100) {
  finalCartValue = cartValue - cartValue * 0.1;
  console.log("10% discount applied");
} else if (cartValue > 100) {
  finalCartValue = cartValue - cartValue * 0.2;
  console.log("20% discount applied");
}

console.log(`Final cart total is $${finalCartValue}`);

// Challenge-2: Write a program to check if a user has a valid subscription. If the user has a subscription check if the subscription is "premium" or "standard".

let hasSubscription = true;
let subscriptionType = "premium";

if (hasSubscription) {
  if (subscriptionType === "premium") {
    console.log("Access to all content");
  } else if (subscriptionType === "standard") {
    console.log("Access to limited content");
  } else {
    console.log("Unknown subscription type..!");
  }
} else {
  console.log("Please subscribe to access content..!");
}
