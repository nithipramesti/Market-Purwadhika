// //no 1
// let things = ['Alex', 'Elena', 'Chaplin', 'Bernard', 'Dany']

// things.sort()
// things.reverse()

// console.log(things);


// //no 2
// let data  = [1,2,3,4,5,6,7,8]
// let reverseData = []

// for(var i=data.length-1; i>=0; i--){
//     reverseData.push(data[i])
// }

// console.log(data);
// console.log(reverseData);

//Fruit data
let fruit = [
    ['Apple',15,8.5],
    ['Grape',8,11],
    ['Orange',12,6.9]
]

let remove = 'Grape'
let index = fruit[1].indexOf(remove)

console.log(fruit);

fruit.splice(0,1)
console.log(fruit);