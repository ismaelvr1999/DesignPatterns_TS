interface Command {
    execute(): void;
    undo(): void;
}

class Stereo {
    private volumen = 0;

    volumenUp() {
        this.volumen++;
        console.log("volumen up " + this.volumen);
    }

    volumenDown() {
        this.volumen--;
        console.log("volumen down " + this.volumen);
    }
}

class StereoVolumenUpCommand implements Command {
    constructor(
        public stereo: Stereo
    ) { }

    execute(): void {
        this.stereo.volumenUp()
    }

    undo(): void {
        this.stereo.volumenDown()
    }
}

class StereoVolumenDownCommand implements Command {
    constructor(
        public stereo: Stereo
    ) { }

    execute(): void {
        this.stereo.volumenDown()
    }

    undo(): void {
        this.stereo.volumenUp()
    }
}


class RemoteControl {
    public lastCommand: Command | null = null;
    public buttons: {[key: string]: Command} = {};

    setCommand(button:string, command:Command) {
        
        this.buttons[button] = command;
    }
    pressButton(button:string){
        let command = this.buttons[button];
        if (command != undefined){
            command.execute();
            this.lastCommand = command;
        }
    }
    undoLastCommand(){
        if(this.lastCommand != null){
            this.lastCommand.undo()
        }
    }
}
