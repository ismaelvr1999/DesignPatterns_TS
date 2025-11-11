interface Subscriber {
    id: string;
    update(context: Publisher): void;
}

interface Publisher {
    subscribe(subscriber: Subscriber): void;
    unsubscribe(subscriber: Subscriber): void;
    notifySubscribers(): void;
}


class WeatherStation implements Publisher {
    private subscribers: Map<string, Subscriber> = new Map();
    public temp: number = 0;

    subscribe(subscriber: Subscriber): void {
        this.subscribers.set(subscriber.id, subscriber)
    }

    unsubscribe(subscriber: Subscriber): void {
        this.subscribers.delete(subscriber.id);
    }

    notifySubscribers(): void {
        for (let [k, s] of this.subscribers) {
            s.update(this);
        }
    }

    updateTemp(temp: number) {
        this.temp = temp;
        this.notifySubscribers();
    }
}

class SubscriberPhone implements Subscriber {
    constructor(public id: string) { }
    update(context: WeatherStation): void {
        console.log(`Subscriber ${this.id} has been notified. Current temp is ${context.temp} `)
    }
}

let weatherStation = new WeatherStation();
let subPhone = new SubscriberPhone("1212");
let subPhone1 = new SubscriberPhone("1313");

weatherStation.subscribe(subPhone);
weatherStation.subscribe(subPhone1);
weatherStation.updateTemp(40);



