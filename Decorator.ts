interface Beverage {
    getDescription (): string ;
    cost(): number;
}

class Espresso implements Beverage {
    getDescription(): string {
        return "Expresso";
    }
    cost(): number {
        return 20;
    }
}

class HouseBlend implements Beverage {
    getDescription(): string {
        return "HouseBlend";
    }
    cost(): number {
        return 30;
    }
}

abstract class BeverageDecorator implements Beverage {
    protected wrapee: Beverage;
    
    constructor(wrapee: Beverage){
        this.wrapee = wrapee;
    }

    getDescription(): string {
        return this.wrapee.getDescription();
    }

    cost(): number {
        return this.wrapee.cost();
    }
}


class MilkDecorator extends BeverageDecorator {

    getDescription(): string {
        return this.wrapee.getDescription() +" Milk";
    }

    cost(): number {
        return this.wrapee.cost() + 10; 
    }
}

class MochaDecorator extends BeverageDecorator {

    getDescription(): string {
        return this.wrapee.getDescription() +" Mocha";
    }

    cost(): number {
        return this.wrapee.cost() + 15; 
    }
}

let houseBlend = new HouseBlend();
let milkD = new MilkDecorator(houseBlend);
let mochaD = new MochaDecorator(milkD); 
console.log(mochaD.getDescription());
console.log(mochaD.cost());

