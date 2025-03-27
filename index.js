let arr1 = [3,7,34,90,12]
console.log(arr1.at(-1))

let arr2 = [true,"green","where",12,56]
console.log(arr2.at(-1))

let myPets = ["Cow","Bird","Snake","Dog"]
pets2 = myPets.join(" ");
console.log({pets2})

var arr3 = [-5,9,5, 3,2,-3,6,8,4,1]
var newArr = arr3.sort()
console.log({newArr})
//4
let arr4 = ["boy","man","girl","school","girl","woman"]
let array4 = arr4.filter(duplicate);
console.log({array4});

//5
let arr5=["The","way","x",4];
let text = "food";
console.log(arr5.includes(text)?text: "the search word was not found");

//6
let  word= "renniw"
let sortedString= word.split('').sort().join('');
console.log (sortedString);

//7
let fruits = ["Mango","Kiwi","Orange","Pineapple","Banana","Apple","Guava","Pear","Straberry","Bkackberry" ];
let newFruits = fruits.splice(5,0,'Tomato');
console.log(fruits);



