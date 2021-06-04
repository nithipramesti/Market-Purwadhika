//Fruit data
let fruit = [
    ['Apple',15,8.5],
    ['Grape',8,11],
    ['Orange',12,6.9]
]

//Cart 
let cart = [0,0,0]



//APP
while(true){
    //select menu
    let mainMenu = prompt('Welcome! \nPlease select the menu below: \n1. Display fruits \n2. Add fruit \n3. Remove fruit \n4. Buy fruit \n5. Exit')

    if (mainMenu == 1){
        //Loop for fruit display
        let fruitDisplay = ''
        for(let i=0; i<fruit.length; i++){
            fruitDisplay += `${fruit[i][0]} (Stock: ${fruit[i][1]})\n`
        }

        //Displaying fruit list
        alert(`FRUIT LIST\n \n${fruitDisplay}`)

    } else if (mainMenu == 2){
        //User inser new fruit information
        let newFruitName = prompt("What is the fruit's name?")
        let newFruitStock = prompt("How many are the fruit's stock?")
        let newFruitPrice = prompt("How much the price of the fruit?")

        //Insert new fruit to array
        let newFruit = [newFruitName, Number(newFruitStock), Number(newFruitPrice)]
        fruit.push(newFruit)

        //Add new slot to cart
        cart.push(0)

        //Loop for fruit display
        let fruitDisplay = ''
        for(let i=0; i<fruit.length; i++){
            fruitDisplay += `${fruit[i][0]} (Stock: ${fruit[i][1]})\n`
        }

        //Displaying fruit list
        alert(`FRUIT LIST\n \n${fruitDisplay}`)

    } else if (mainMenu == 3){
        //User insert what fruit to remove
        let fruitNames = ''
            for(let i=0; i<fruit.length; i++){
                fruitNames += `${i+1}. ${fruit[i][0]} (Stock: ${fruit[i][1]})\n` //Display STOCK!!!!
            }
            
        let removeFruit = prompt(`What fruit do you want to remove? \n${fruitNames}`)
        
        //Remove fruit from array
        if (removeFruit <= fruit.length){
            fruit.splice(removeFruit-1,1)
        } else {
            alert(`There's no such a fruit!`)
        }

        //Loop for fruit display
        let fruitDisplay = ''
        for(let i=0; i<fruit.length; i++){
            fruitDisplay += `${fruit[i][0]} (Stock: ${fruit[i][1]})\n`
        }

        //Displaying fruit list
        alert(`FRUIT LIST\n \n${fruitDisplay}`)

    } else if (mainMenu == 4){
        while(true){
            //Loop for displaying fruit names
            let fruitNames = ''
            for(let i=0; i<fruit.length; i++){
                fruitNames += `${i+1}. ${fruit[i][0]} ($${fruit[i][2]} | Stock: ${fruit[i][1]})\n` //Display STOCK!!!!
            }
            
            //Ask user to select what fruit they want to buy
            let fruitSelect = prompt(`What fruit do you want to buy? \n${fruitNames}`)

            //Ask user how many they want to buy, and adding it to cart
            while(true){
                let quantity = 0
                quantity = Number(prompt("How many would you like to buy?"))

                //Check for the stock
                if (fruit[fruitSelect-1][1] - quantity <0){ //If user insert more than stock
                    alert(`The stock currently is ${fruit[fruitSelect-1][1]}, please insert new quantity.`)
                } else { //If payment correct
                    cart[fruitSelect-1] += quantity //update cart
                    fruit[fruitSelect-1][1] -= quantity //update stock
                    break 
                }
            }

            //Loop for displaying cart items
            let cartItems = ''
            for(let i=0; i<fruit.length; i++){
                if (cart[i] !=0){
                    cartItems += `${fruit[i][0]}: ${cart[i]} x $${fruit[i][2]} = $${cart[i] * fruit[i][2]}\n`
                }
            }

            //Displaying live cart; and asking user whether they want to continue shopping or checkout
            let nextStep = prompt(`${cartItems} \nDo you want to continue shopping? \n1.Continue shopping \n2.Proceed to checkout`)

            //Loop for calculate the total payment
            let totalPayment = 0
            for(let i=0; i<fruit.length; i++){
                totalPayment += cart[i] * fruit[i][2]
            }

            if(nextStep == 2){
                //Displaying user cart and asking for payment
                while(true){
                    let userPayment = prompt(`CHECKOUT \n\n${cartItems} \nTOTAL: $${totalPayment}`)

                    let margin = userPayment - totalPayment

                    if (margin<0){
                        alert(`Your payment need $${Math.abs(margin)} more, please insert new amount.`)
                    } else if (margin>0){
                        alert(`Thank you for your order, your change is $${margin}.`)
                        break
                    } else {
                        alert('Thank you for your order!')
                        break
                    }
                }

                //Empty the cart
                for(let i=0; i<fruit.length; i++){
                    cart[i]=0
                }

                break
            }
        }
    } else {
        alert('Thank you!')
        break
    }
}