// Here our Pokemon consturctor takes in 3 paramters and an optional fourth. If the instance of pokemon does not specify the sleep paramter, it will automatically be set to true. 
function Pokemon(name, attack, health, sleep = true) {
    this.name = name,
        this.power = attack,
        this.health = health,
        this.isSleeping = sleep,
        this.attack = function (char) {
            console.log(`${char.name} has been attacked by ${this.name} and now has a health of ${char.health - this.power}`)
        }
}
// Our Pokemon are out and ready for a battle and some relaxation. They all inherit from the base class of Pokemon. 
var ash = new Pokemon("Ash Ketchup", 100, 40);
var sunny = new Pokemon("Sunny side Up", 10, 150, false)
var jason = new Pokemon("Chartruce Possum", 100, 100);

console.log("----------Sleeping State-------------")
console.log(`Sunny: ${sunny.isSleeping}`);
console.log(`Ash: ${ash.isSleeping}`)
console.log(`Jason: ${jason.isSleeping}`)
console.log("-------------------------------")
// Notice sunny is the only one who is not sleeping because we passed in an argument for his is sleeping state.

// This seems all well and good, but wirting that much code makes even Pokemon a tad sick.
//Lets  make a loop with our objects and then print their stats
let pokemons = [ash, sunny, jason];
pokemons.forEach(poke => {
    console.log(`
    Name: ${poke.name}
    Power: ${poke.power}
    Health: ${poke.health}
    IsSleeping: ${poke.isSleeping}
`)
})


// Players can now attack one another
console.log("----------Attack Session-------------")
sunny.attack(ash)
ash.attack(sunny)
jason.attack(sunny)
console.log("-------------------------------")
// Sunny is still a pokemon, but his sunbeam functionality is his own.

sunny.sunbeam = function () {
    this.isSleeping = !this.isSleeping
    return !this.isSleeping ? "Sunny is sleeping : ( " : "Sunny used Sunbeam!!!"
}

console.log("------------Sunny Switch -----------")
console.log(sunny.sunbeam());
console.log(sunny.sunbeam());
console.log("---------------------------------")