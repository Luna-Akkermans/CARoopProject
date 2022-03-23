//Initialization of energy types
const Lightning = new Energy('Lightning');
const Fire = new Energy('Fire');
const Fight = new Energy('Fight');
const Water = new Energy('Water');
//Initialization of Pokemon types
const Pikachu = new Pokemon(
    'Pikachu',
    60,
    Lightning,
    new Weakness(Fire.name, 1.5),
    new Resistance(Fight.name, 20),
    [
        new Attack('Quick Attack', Lightning, 10),
        new Attack('Electro Ball', Lightning, 50)
    ],
);

const Charmander = new Pokemon(
    'Charmander',
    70,
    Fire,
    new Weakness(Water.name, 2),
    new Resistance(Lightning.name, 20),
    [
        new Attack('Scratch', Fire, 10),
        new Attack('Flame Tail', Fire, 20)
    ],
);

const Squirtle = new Pokemon(
    'Squirtle',
    50,
    Water,
    new Weakness(Lightning.name, 2),
    new Resistance(Water.name, 20),
    [
        new Attack('Rain Splash', 10),
        new Attack('Shell Attack', 40)
    ]
)



//Add pokemons to array of currently alive pokemon.name,
//Init array
var pokemons = [Pikachu, Charmander, Squirtle];
// Execute Pokemon
while (pokemons.length > 1) {
    console.log(pokemons.length)
    pokemons.forEach((element, index) => {
        if (!element.alive) {
            pokemons.splice(index, )
        } else {
            if (element === pokemon.length - 1) {
                element.Attack([
                        Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0
                    ],
                    pokemons[0]
                )
                element.attacks(
                    element.Attack([
                            Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0
                        ],
                        pokemons[indx + 1]
                    )
                )
            }
        }
    })
}
