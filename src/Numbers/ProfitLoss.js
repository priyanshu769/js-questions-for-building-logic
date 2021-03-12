// Question: Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

const profitLoss = (cp, sp) => {
  if (sp - cp > cp - sp) {
    return `${sp - cp} profit`;
  } else if (sp - cp < cp - sp) {
    return `${cp - sp} loss`;
  }
};

// console.log(profitLoss(1500, 2000));
// console.log(profitLoss(3125, 1125));
