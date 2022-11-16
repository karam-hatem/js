

let users = JSON.parse(localStorage.getItem('userData')) || [];
function showdata(){

const first=document.getElementById("first_name").value;
const lastName=document.getElementById("last_name").value;
const Email=document.getElementById("Email").value;
const Username=document.getElementById("User_name").value
const Password=document.getElementById("Password").value;
console.log(Username);


let user ={
    first,
    lastName,
    Email,
    Username,
    Password
}
users.push(user) 
// console.log(users);
localStorage.setItem('userData', JSON.stringify(users))
}

