interface Notifier {
    sendNotification: () => void;
}

class EmailNotifier implements Notifier {
    sendNotification() {
        console.log("Hello from Email notifier");
    }
}

class SMSNotifier implements Notifier {
    sendNotification() {
        console.log("Hello from SMS notifier");
    }
}

abstract class NotifierFactory {
    private static registry: Record<string, new () => Notifier> = {};

    public static register(type: string, cls: new () => Notifier) {
        this.registry[type] = cls;
    }

    public static create(type: string) {
        const CLS = this.registry[type];
        if(!CLS){
            throw new Error("Class did't registered");
        }
        return new CLS();
        
    }
}

NotifierFactory.register("SMSNotifier",SMSNotifier);
NotifierFactory.register("EmailNotifier",EmailNotifier);

let emailN = NotifierFactory.create("EmailNotifier");


emailN.sendNotification();
