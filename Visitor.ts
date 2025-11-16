interface FileSystemVisitor {
    visitFile(file: FileElement): void;
    visitDirectory(directory: DirectoryElement): void;
}

interface FileSystemElement {
    name: string;
    accept(v: FileSystemVisitor): void;
}

class FileElement implements FileSystemElement {
    constructor(public name: string, public size: number) {

    }
    accept(v: FileSystemVisitor): void {
        v.visitFile(this);
    }
}

class DirectoryElement implements FileSystemElement {
    public children: FileElement[] = [];
    constructor(public name: string) { }
    accept(v: FileSystemVisitor): void {
        v.visitDirectory(this);

        for ( const child of this.children){
            v.visitFile(child);
        }
    }
}

class SizeCalculatorVisitor implements FileSystemVisitor {
    private totalSize = 0;
    visitFile(file: FileElement): void {
        this.totalSize += file.size;
    }

    visitDirectory(directory: DirectoryElement): void {
    }

    getTotalSize() {
        return this.totalSize;
    }
}

let file1 = new FileElement("file1.txt",60);
let file2 = new FileElement("file2.txt",60);
let directory = new DirectoryElement("foo");
let sizeCalculatorVisitor = new SizeCalculatorVisitor();
directory.children.push(file1,file2);
directory.accept(sizeCalculatorVisitor);

console.log(sizeCalculatorVisitor.getTotalSize());
