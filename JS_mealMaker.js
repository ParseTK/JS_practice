// Define a menu object with private properties _meal and _price
const menu = {
  _meal: '',
  _price: 0,

  // Setter for meal property, checks if input is a string
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },

  // Setter for price property, checks if input is a number
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },

  // Getter for today's special, returns a formatted string if both meal and price are set
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

// Set the meal to 'Apples'
menu.meal = 'Apples';

// Set the price to 2
menu.price = 2;

// Log the menu object
console.log(menu);

// Log the today's special message
console.log(menu.todaysSpecial);
