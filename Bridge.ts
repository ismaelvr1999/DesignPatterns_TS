interface Shape {
    render: Render;
    draw (): void;
}

interface Render {
    render_shape(shape:string): void;
}

class Circle implements Shape {
    render: Render;

    constructor(render: Render){
        this.render = render
    }

    draw(): void {
        this.render.render_shape("Circle");
    }
}

class VectorRender implements Render {
    render_shape(shape: string): void {
        console.log(`Drawing ${shape} as lines`);
    }
}

class RasterRender implements Render {
    render_shape(shape: string): void {
        console.log(`Drawing ${shape} as pixels`);
    }
}

let circle = new Circle(new RasterRender());

circle.draw()