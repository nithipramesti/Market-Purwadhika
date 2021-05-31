//Fruit data
let fruit = [
    ['Apple',15,8],
    ['Grape',8,10],
    ['Orange',11,6]
]

//Cart 
let cart = [0,0,0]


//Fruit Display
let fruitDisplay = ''
for (let i=0; i<fruit.length; i++){
    fruitDisplay += `${fruit[i][0]} = $${fruit[i][2]} (Stock: ${fruit[i][1]}) \n`
}

while(true) {
    var menuInput = prompt(`Welcome to MarketApp! \nPlease select the menu below:

    1. Items list
    2. Add items to cart
    3. Delete items from cart
    4. Checkout
    4. Exit`)

    if(menuInput==1){

        alert(`FRUIT LIST \n${fruitDisplay}`)

    } else if(menuInput==2) {
        
        while(true){
            let fruitAdd = '\n'
            let cartAdd

            for (let i=0; i<fruit.length; i++){
                fruitAdd += `${i+1}. ${fruit[i][0]} \n`
            }

            var fruitSelect = prompt(`What fruit do you want to buy? \n ${fruitAdd}${fruit.length+1}. Back`)

            for (let i=0; i<fruit.length; i++) {
                if (fruitSelect == i+1) {
                    cart[i] += prompt(`Insert ${fruit[i][0]} quantity:`)

                    let totalBuy = ''

                    for (let i=0; i<fruit.length; i++) {
                        totalBuy += `${fruit[i][0]} : ${cart[i]} ($${fruit[i][2]}) \n`
                    }
                    cartAdd = prompt(`YOUR CART: \n ${totalBuy} \n Do you want to checkout or continue shopping? \n 1. Checkout \n 2. Continue shopping`)

                    if(cartAdd == 1){
                        menuInput = 4
                    }
                    
                } else if(fruitSelect == fruit.length+1){
                    break
                }
            }

            break
        }

    } else if(menuInput==4){
        console.log('TRUE CHECKOUT');
    } else {
        break
    }
}