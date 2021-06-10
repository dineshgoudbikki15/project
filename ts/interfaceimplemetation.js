var Customer = /** @class */ (function () {
    function Customer() {
        this.firstName = 'chiru';
        this.lastName = 'uday';
    }
    Customer.prototype.getMessage = function () {
        return "Welcome " + this.firstName + " " + this.lastName;
    };
    return Customer;
}());
var customer = new Customer();
console.log(customer.firstName, customer.lastName);
console.log(customer.getMessage());
