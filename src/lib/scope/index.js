'use strict';

const foodBudgetAdder = (midMorningSnack) => {
  const bagels = 10;
  let coffee = 5;

  const breakfastFoodPrice = (price) => {
    coffee = 2;
    return price + bagels;
  };
  const doughnuts = breakfastFoodPrice(20);

  return anotherFoodPrice => `I spent ${anotherFoodPrice + coffee + doughnuts + midMorningSnack} dollars on food today`;
};


const initialFood = foodBudgetAdder(2);

console.log(initialFood);  /* eslint-disable-line */
console.log(initialFood(6));  /* eslint-disable-line */
