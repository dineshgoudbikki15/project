function getCustomerInfo(name, age) {
    var hobbies = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        hobbies[_i - 2] = arguments[_i];
    }
    console.log("Name: " + name + " and Age: " + age);
    console.log("Hobbies are: " + hobbies);
}
//getCustomerInfo('chiru', 35)
getCustomerInfo('chiru', 35, 'Playing cricket', 'watchingTV');
