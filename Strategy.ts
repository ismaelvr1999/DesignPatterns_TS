interface PaymentStrategy {
    pay(amount: number): void;
}

class PaymentContext {
    private paymentStrategy: PaymentStrategy = new CashPayment(); // default

    pay(amount: number) {
        this.paymentStrategy.pay(amount);
    }
    changePaymentMethod(method: PaymentStrategy) {
        this.paymentStrategy = method;
    }
}

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(`Pay with credit card: $${amount}`);
    }
}

class CashPayment implements PaymentStrategy {
    pay(amount: number) {
        console.log(`Pay with cash: $${amount}`);
    }
}

let paymentMethod = "cash";
let paymentContext = new PaymentContext();
switch (paymentMethod) {
    case "cash": {
        paymentContext.changePaymentMethod(new CashPayment());
    } break;

    case "creditCard": {
        paymentContext.changePaymentMethod(new CreditCardPayment());
    } break;

    default:{
        console.log(`payment method ${paymentMethod} don't implemented`)
    }break;

}
paymentContext.pay(200.12);