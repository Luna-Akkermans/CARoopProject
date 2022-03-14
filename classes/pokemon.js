class Pokemon {
    constructor(name,energy,health) {
        this.name = name;
        this.energy = energy;
        this.health = health;

        }



    attack(energy) {
        const damage = Math.floor(Math.random() * 21) - 5;
        switch(energy.toLowerCase()) {
            case "water":
                console.log("water")
                break;
            case "grass":
                console.log("grass")
                break;
            case "fire":
                console.log("fire")
                break;
            case "electric":
                    console.log("electric")
                    break;

        }
    }
}