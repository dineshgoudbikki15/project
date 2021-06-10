let customer={
    custName:'chiru',
    custCity:'Hyderabad',
    getNoOfMobiles(){
        return 2
    }
}
const {custName, custCity:city, getNoOfMobiles} = customer
console.log(custName,city,getNoOfMobiles())