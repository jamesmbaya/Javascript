 let num =10;

 if(num<20){
     num1= 30 ;
     console.log( num + "This is a local scope");
 }

 console.log(num);
 console.log(num1);

 function add(num){
     let age = 20;
     console.log(num + age)

 }

 add(20);

//type coercion vs type conversion

 let age1 = 40;
 let age2 = '30';//Type coersion

 age2 = parseInt(age2); //type conversion


 let totalAge = age1 + age2;

 console.log(totalAge)

let person = {
    name: "James",
    age: "21",
    country: "Kenya",
    food: "KFC",
    welcome:function(){
        console.log("Welcome");   
    }
}
console.log(person.name ="James");
console.log(person.age = "21");
console.log(person.country = "Kenya");
console.log(person.food = "KFC");

function add(a,b){
    console.log("me")
     return a+b;

}
add(1,2);
let cars =["Range" ,"Mazda", "Ford", "Toyota"]
let age = [20,10,15,15,16,18,17]
let gender =["male" , "female"]

console.log(cars[3]);
console.log(age[0]);
console.log(gender[0]);
console.log(cars[-2]);
console.log(cars[cars.length -1]);

cars.push("Tesla")
console.log(cars);

cars.unshift("Ferrari");
console.log(cars);

cars.pop()
console.log(cars);

cars.shift()
console.log(cars);

age.sort()
console.log(age);

cars.reverse()
console.log(cars);

cars.forEach(function(car){
    console.log(car);
})


let cars=[["Ferrari","Range","Mazda","Ford","Toyota","Tesla"],[10,15,15,16,17,18,20],["Male","Female"]]
  
for(let car in cars){
    console.log(car)
    console.log(cars[car]);
    
}
//Nested loops
for(let car in cars){
    for(let i in cars[car]){
        console.log(i)
        console.log(cars[car][i])
    }
}
for (let i=1; i<=10; i++){
    console.log(i);
}

for(something in anything){
     console.log(something);
}

// //for...in loops...>>syntax{for(cost rank in rankings)}

let rankings = {
    "1": "Ken Koi" ,
    "2": "Zed Zeddy" ,
    "3": "Benson Kamau" ,
    "4": "Kirui Tanui" ,
    "5": "James Muthiora " ,
    "6":  "Halima Mobeto" ,
    "7": "Macharia Ogutu" ,
    "8": "Jomo Kigua" ,
    "9": "Zion Gakenia" ,
    "10": "Leah Kamau" 
}

for(let rank in rankings){
    console.log(rank) ;
    console.log(rankings[rank]);
}