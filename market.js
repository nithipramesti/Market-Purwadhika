//Fruit data
// let fruit = [
//   //[fruit, stock, price, cart]
//   ["Apple", 15, 8.5, 0],
//   ["Grape", 8, 11, 0],
//   ["Orange", 12, 6.9, 0],
// ];

const fruit = [
  { name: "Apple", stock: 15, price: 8.5, cart: 0 },
  { name: "Grape", stock: 8, price: 11, cart: 0 },
  { name: "Orange", stock: 12, price: 7, cart: 0 },
];

//Display cart function
let fruitDisplay = () => {
  let display = "";
  fruit.forEach((val, idx) => {
    display += `${idx + 1}. ${val.name} ($${val.price} | Stock: ${
      val.stock
    })\n`;
  });
  return display;
};

//APP
while (true) {
  //select menu
  let mainMenu = prompt(
    "Welcome! \nPlease select the menu below: \n1. Display fruits \n2. Add fruit \n3. Remove fruit \n4. Buy fruit \n5. Exit"
  );

  if (mainMenu == 1) {
    //Displaying fruit list
    alert(`FRUIT LIST\n \n${fruitDisplay()}`);
  } else if (mainMenu == 2) {
    //User inser new fruit information
    let newFruitName = prompt("What is the fruit's name?");
    let newFruitStock = prompt("How many are the fruit's stock?");
    let newFruitPrice = prompt("How much the price of the fruit?");

    //Insert new fruit to array
    let newFruit = {
      name: newFruitName,
      stock: Number(newFruitStock),
      price: Number(newFruitPrice),
      cart: 0,
    };
    fruit.push(newFruit);

    //Displaying fruit list
    alert(`FRUIT LIST\n \n${fruitDisplay()}`);
  } else if (mainMenu == 3) {
    //User insert what fruit to remove
    let removeFruit = prompt(
      `What fruit do you want to remove? \n${fruitDisplay()}${
        fruit.length + 1
      }. Back`
    );

    //Remove fruit from array
    while (true) {
      if (removeFruit <= fruit.length) {
        //Make sure
        let makeSure = prompt(
          `Are you sure you want to remove '${
            fruit[removeFruit - 1].name
          }'? \n1.Yes 2.No`
        );
        if (makeSure == 2) {
          break;
        }

        //remove fruit
        fruit.splice(removeFruit - 1, 1);

        //Displaying fruit list
        alert(`FRUIT LIST\n \n${fruitDisplay()}`);
        break;
      } else if (removeFruit == fruit.length + 1) {
        break; //go back to main menu
      } else {
        alert(`There's no such a fruit!`);
        break; //wrong input
      }
    }
  } else if (mainMenu == 4) {
    while (true) {
      //Ask user to select what fruit they want to buy
      let fruitSelect = prompt(
        `What fruit do you want to buy? \n${fruitDisplay()}`
      );

      //Ask user how many they want to buy, and adding it to cart
      while (true) {
        let quantity = 0;
        quantity = Number(prompt("How many fruits would you like to buy?"));

        //Check for the stock
        if (fruit[fruitSelect - 1].stock - quantity < 0) {
          //If user insert more than stock
          alert(
            `The stock currently is ${
              fruit[fruitSelect - 1].stock
            }, please insert new quantity.`
          );
        } else {
          //If payment correct
          fruit[fruitSelect - 1].cart += quantity; //update cart
          fruit[fruitSelect - 1].stock -= quantity; //update stock
          break;
        }
      }

      //Loop for displaying cart items
      let cartItems = "";
      fruit.forEach((val) => {
        if (val.cart != 0) {
          cartItems += `${val.name}: ${val.cart} x $${val.price} = $${
            val.cart * val.price
          }\n`;
        }
      });

      //Displaying live cart; and asking user whether they want to continue shopping or checkout
      let nextStep = prompt(
        `${cartItems} \nDo you want to continue shopping? \n1.Continue shopping \n2.Proceed to checkout`
      );

      //Loop for calculate the total payment
      let totalPayment = 0;
      fruit.forEach((val) => {
        totalPayment += val.cart * val.price;
      });

      if (nextStep == 2) {
        //Displaying user cart and asking for payment
        while (true) {
          let userPayment = prompt(
            `CHECKOUT \n\n${cartItems} \nTOTAL: $${totalPayment}`
          );

          let margin = userPayment - totalPayment;

          if (margin < 0) {
            alert(
              `Your payment need $${Math.abs(
                margin
              )} more, please insert new amount.`
            );
          } else if (margin > 0) {
            alert(`Thank you for your order, your change is $${margin}.`);
            break;
          } else {
            alert("Thank you for your order!");
            break;
          }
        }

        //Empty the cart
        fruit.forEach((val) => {
          val.cart = 0;
        });

        break;
      }
    }
  } else {
    alert("Thank you!");
    break;
  }
}
