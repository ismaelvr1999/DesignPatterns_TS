class Editor {
    private text: string = '';
    private cursorX: number = 0;
    private cursorY: number = 0;

    setText(text: string) {
        this.text = text;
    }
    getText() {
        return this.text;
    }

    setCursorX(cursorX: number) {
        this.cursorX = cursorX;
    }
    getCursorX() {
        return this.cursorX;
    }

    setCursorY(cursorY: number) {
        this.cursorY = cursorY;
    }
    getCursorY() {
        return this.cursorY;
    }

    save() {
        return new EditorMemento(
            this.text, 
            this.cursorX, 
            this.cursorY)
    }

    restore (memento: EditorMemento){
        this.setCursorX(memento.cursorX);
        this.setCursorY(memento.cursorY);
        this.setText(memento.text);
    }

}

class EditorMemento {
    constructor(
        public readonly text: string,
        public readonly cursorX: number,
        public readonly cursorY: number) {

    }
}

class HistoryMemento {
    private history : EditorMemento[] = []
    
    pushMemento(memento: EditorMemento) {
        this.history.push(memento)
    }

    popMemento(){
        return this.history.pop()
    }
}