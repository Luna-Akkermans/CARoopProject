class Pokemon {
    constructor(name, maxHealth, active, activeHealth, type, weakness, resistance, ...attacks){
        this.name = name;
        this.maxHealth = maxHealth;
        this.active;
        this.activeHealth = activeHealth;
        this.type = type;
        this.weakness = weakness;
        this.resistance = resistance;
        this.attacks = attacks;
    }

    Hit(hitpoint){
        if(hitpoint <= 0 ){
            this.Remove();
        }
    }

    Attacking(Attacker, Defender) {
        let damage;
        if(Attacker.type === Defender.weakness.name){
            damage = Attacker.damage * Math.floor(Math.random() * 5) + 1;
            Defender.Hit(damage);
        }
        else if(Attacker.type === Defender.resistance.name){
            damage = Attacker.damage - Math.floor(Math.random() * 5) + 1; 
            Defender.Hit(damage);
        }
        else{
            Defender.Hit(damage);
        }
    }

    Delete() {
        this.active = false;
    }
}