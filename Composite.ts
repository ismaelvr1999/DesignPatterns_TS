namespace Composite{
    interface Graphic {
        draw () : void
    }
    
    export class Circle implements Graphic {
        draw() {
            console.log("Circle drew")
        }
    }

    export class Square implements Graphic {
        draw() {
            console.log("Square drew")
        }
    }

    export class Group implements Graphic {
        private graphics: Graphic[] = [] ;
        
        addGraphic(graphic: Graphic){
            this.graphics.push(graphic);
        }
        draw(): void {
            for(let graphic of this.graphics){
                graphic.draw();
            }
        }
        
    }
}

let circleG = new Composite.Circle();
let squareG = new Composite.Square();
let group = new Composite.Group();

group.addGraphic(circleG);
group.addGraphic(squareG);
group.draw();
