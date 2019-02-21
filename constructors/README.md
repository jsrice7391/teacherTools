# Constructors
This is an exercise that lightly covers construtors within ES5 JavaScript.

All of our instances of Pokemon inherit from the parent class "Pokemon"

```javascript
function Pokemon(name, attack, health, sleep = true) {
    this.name = name,
        this.power = attack,
        this.health = health,
        this.isSleeping = sleep,
        this.attack = function (char) {
            console.log(`${char.name} has been attacked by ${this.name} and now has a health of ${char.health - this.power}`)
        }
}
```

Each of our objects can now be instantiated. 
```javascript
var ash = new Pokemon("Ash Ketchup", 100, 40);
var sunny = new Pokemon("Sunny side Up", 10, 150, false)
var jason = new Pokemon("Chartruce Possum", 100, 100);
```

If we put these Pokemon in an array, we can then go and itterate over them to show all their stats:
```javascript
let pokemons = [ash, sunny, jason];
pokemons.forEach(poke => {
    console.log(`
    Name: ${poke.name}
    Power: ${poke.power}
    Health: ${poke.health}
    IsSleeping: ${poke.isSleeping}
`)
})
```

Sunny has a special power that is just his own. Sunny can only use sunbeam when he isn't sleeping. Once he uses it, he has to sleep and then he can use it again.
```javascript
sunny.sunbeam = function () {
    this.isSleeping = !this.isSleeping
    return !this.isSleeping ? "Sunny is sleeping : ( " : "Sunny used Sunbeam!!!"
}
```


