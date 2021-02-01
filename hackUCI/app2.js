var name;
var lastname;
var dob;
var pet;
var email
var phone;

function getInfo() {
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    dob = document.getElementById("dob").value;
    pet = document.getElementById("pet").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    console.log(name + " " + lastname + " " + dob + " " + pet + " " + email + " " + phone);
    var arr = {name, lastname, dob, pet, email, phone};
    return arr;
}
