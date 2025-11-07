
namespace ChainResponsibility {
    export class Request {
        constructor(
            public description: string,
            public level: number
        ) {

        }
    }

    export abstract class Handler {
        public next: Handler | null = null;
        setNext(next: Handler): void {
            this.next = next;
        }
        abstract handle(request: Request): void;
    }

    export class Level1Support extends Handler{
        handle(request: Request): void {
            if(request.level == 1){
                console.log("I can handle the request Level 1")
            }
            else{
                this.next?.handle(request);
            }
        }
    }

    export class Level2Support extends Handler{
        handle(request: Request): void {
            if(request.level == 1){
                console.log("I can handle the request Level 1")
            }
            else{
                this.next?.handle(request);
            }
        }
    }
}