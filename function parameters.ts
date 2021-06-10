function getCustomerInfo(name:string, age:number, ...hobbies:string[]){
    console.log(`Name: ${name} and Age: ${age}`)
    console.log(`Hobbies are: ${hobbies}`)
}
//getCustomerInfo('chiru', 35)
getCustomerInfo('chiru', 35, 'Playing cricket','watchingTV')
