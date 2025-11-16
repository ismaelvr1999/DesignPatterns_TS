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
    public children: File[] = [];
    constructor(public name: string) { }
    accept(v: FileSystemVisitor): void {
        v.visitDirectory(this);
    }
}

class SizeCalculatorVisitor implements FileSystemVisitor {
    visitFile(file: FileElement): void {
        console.log(`file size: ${file.size}`);
    }

    visitDirectory(directory: DirectoryElement): void {
        let total = 0;

        for (let file of directory.children) {
            total += file.size;
        }
        console.log(`directory size: ${total}`);
    }
}

let file1 = new FileElement("file1.txt",60);
let file2 = new FileElement("file2.txt",60);
let directory = new DirectoryElement("foo");
let sizeCalculatorVisitor = new SizeCalculatorVisitor();

directory.accept(sizeCalculatorVisitor);
file1.accept(sizeCalculatorVisitor);
file2.accept(sizeCalculatorVisitor);