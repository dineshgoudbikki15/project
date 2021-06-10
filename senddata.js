function getModifyData(){
    var myAge = document.getElementById('myage').value
    var name = document.getElementById('name').value
    var marriage = (myAge < 20) ? 'You are not eligible' : "Your are eligable"
    console.log(name)
    console.log(marriage)
}
