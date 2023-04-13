                             const cars = new Map([
    ["toyota", "555"],
    ["mazda", "345"],
    ["premio", "666"],
    ["Lamboghini", "777"],
    ["Tesla", "999"]
     ]);

cars.set("Harrier", "755");
console.log(cars.has("Harrier")); // true
console.log(cars.has("Sienta")); //false

cars.delete("Harrier");
console.log(cars.has("Harrier")); // false

cars.forEach((value, key) => {
    console.log(key + ": "  +value );
  });

  for (let cars = key; value; value++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(key+ ":" +value);
  }