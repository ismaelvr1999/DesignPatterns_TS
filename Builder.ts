class Meal {
    public mainItem: string = "";
    public sideItem: string = "";
    public drink: string = "";
    public dessert: string = "no dessert";

    show() {
        console.log(`Main item: ${this.mainItem}`);
        console.log(`Side item: ${this.sideItem}`);
        console.log(`Drink: ${this.drink}`);
        console.log(`dessert: ${this.dessert}`);
    }
}

interface Builder {
    reset: () => void;
    setMainItem: (name: string) => void;
    setSideItem: (name: string) => void;
    setDrink: (name: string) => void;
    setDessert: (name: string) => void;
    build: () => Meal;
}

class MealBuilder implements Builder {
    private result: Meal;

    constructor() {
        this.result = new Meal();
    }

    reset() {
        this.result = new Meal();
    }

    setMainItem(name: string) {
        this.result.mainItem = name;
    }

    setSideItem(name: string) {
        this.result.sideItem = name;
    }

    setDrink(name: string) {
        this.result.drink = name;
    }

    setDessert(name: string) {
        this.result.dessert = name;
    }

    build(){
        let product = this.result;
        this.reset();
        return product;
    }

}

class Director {

    static createKidsMeal(builder: MealBuilder){
        builder.reset();
        builder.setMainItem("Chicken Nuggets");
        builder.setSideItem("Fries");
        builder.setDrink("Juice");
        builder.setDessert("Ice Cream");
    }

    static createVegetarianMeal(builder: MealBuilder){
        builder.reset();
        builder.setMainItem("Veggie Burger");
        builder.setSideItem("Salad");
        builder.setDrink("Water");
    }

}

const builder = new MealBuilder();

Director.createKidsMeal(builder);
const kidsMeal = builder.build();
console.log("Kids Meal")
kidsMeal.show();

Director.createVegetarianMeal(builder);
const vegMeal = builder.build();
console.log("Vegetarian Meal")
vegMeal.show()

