interface Internet {
    connectTo(site: string ): void
}

class User {
    constructor(
        public name: string,
        public role: string
    ){

    }
}

class ProxyInternet implements Internet {
    
    constructor(
        public user: User,
        public service: Internet
    ){

    }
    connectTo(site: string): void {
        if(site === "www.google.com" && this.user.role === "admin" ){
            this.service.connectTo(site);
        }
        else{
            console.log("forbidden connection")
        }
    }
}

class InternetService implements Internet {

    connectTo(site: string): void {
        console.log(`conection to ${site} successfully` );
    }
}


let user = new User("john","admin");
let proxyInternet = new ProxyInternet(user,new InternetService());
proxyInternet.connectTo("www.google.com");


