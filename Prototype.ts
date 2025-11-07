abstract class Character {

    constructor(
        public health: number,
        public stamina: number,
        public magicPower: number,
        public weapon: string,
        public level = 0,
        public name = "character") {
    }
    abstract clone(): Character;
}

class WarriorPrototype extends Character {

    constructor(
        health = 80,
        stamina = 70,
        magicPower = 10,
        weapon = "sword",
        level = 1,
        name = "warriorProtype") {
        super(health, stamina, magicPower, weapon, level, name);
    }
    clone(): Character {
        let warriorClone = new WarriorPrototype(this.health, this.stamina, this.magicPower, this.weapon, this.level, this.name);

        return warriorClone;
    }
}

let warriorPro = new WarriorPrototype()
warriorPro.level = 10;
warriorPro.name = "John";


let warriorClone = warriorPro.clone();

console.log(warriorClone);