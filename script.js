const colours = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colours.length) {
    console.log(colours[i]);
    i++;
}


for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}

colours.forEach(element => console.log(element));

// while: 5, for: 3
// 1
// minder fouten met i

const person = {
    age: 28,
    name: "Susanne",
    gender: "woman",
    favoriteColor: "blue",
    favoriteFood: "pizza"
};

for (property in person) {
    console.log(person[property]);
}