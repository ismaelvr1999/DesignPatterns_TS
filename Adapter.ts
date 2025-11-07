interface IPaymentSystem {
    makePayment (amount: number ): void;
}

class OldPaymentSystem implements IPaymentSystem {
    makePayment(amount: number ): void{
        console.log(`Processing payment of $${amount} through OldPaymentSystem`);
    }
}

class NewPaymentSystem {
    pay(details:{amount: number, currency: string} ): void{
        console.log(`Paid ${details.amount}  ${details.currency}  via NewPaymentGateway`);
    }
}


class OldPaymentSystemAdapter implements IPaymentSystem {
    private newPaymentSystem: NewPaymentSystem = new NewPaymentSystem (); 
    constructor(currency = "USD" ){}
    makePayment(amount: number): void {
        this.newPaymentSystem.pay({amount,currency: "USD"});
    }
}

let paymentSystem = new OldPaymentSystemAdapter();

paymentSystem.makePayment(100);