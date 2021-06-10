interface Dinesh{
    firstName:string;
    lastName:string;
    getMessage():string
}
class Customer implements Dinesh{
    firstName:string = 'chiru';
    lastName:string ='uday';
    getMessage():string{
        return `Welcome ${this.firstName} ${this.lastName}`
    }
}
let customer = new Customer();
console.log(customer.firstName, customer.lastName)
console.log(customer.getMessage())
