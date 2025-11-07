class TreeType {
    constructor(
        readonly type: string, 
        readonly color: string, 
        readonly texture: string) {
    }
}

class Tree {
        constructor(
        public x: number, 
        public y: number,
        public treeType: TreeType) {
    }
    draw(){
        console.log(`draw on x: ${this.x} y: ${this.y}`);
    }
}

class TreeFactory{
    treeTypes: Map<string,TreeType> = new Map();

    getTreeType (type:string,color:string,texture:string) : TreeType{
        let treeT = this.treeTypes.get(type);
        if(treeT === undefined){
            let newTree = new TreeType(type,color,texture)
            this.treeTypes.set(type,newTree);
            return newTree;
        }
        return treeT;
    }
}

let treeF = new TreeFactory();
let pineTree = treeF.getTreeType("Pine","green","soft");
let tree1 = new Tree(12,10,pineTree);