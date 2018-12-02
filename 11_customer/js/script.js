class Customer {
    constructor(name) {
        this.name = name;
    }
    buy() {
        console.log('Куплено');
    }
}

class ChildCustomer extends Customer {
    getPresent() {
        console.log('Шарик в подарок');
    }
}