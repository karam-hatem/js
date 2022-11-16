
const form = document.getElementById("ta account-form");
const userEmail= document.getElementById("Email");
const userPassword =document.getElementById("Password");
let users = JSON.parse(localStorage.getItem('userData')) || []
console.log(users);


function Login(){
    let y = users.map(function(ele){
        
        console.log(ele.Email);
        console.log(userEmail.value);


        if(userEmail.value==ele.Email &&userPassword.value==ele.Password){
        console.log(ele);
        // console.log(true);
    }
});
}










// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//   {
//     return (true)
//   }
//     // alert("You have entered an invalid email address!")
//     return (false)
// }


// console.log(ValidateEmail('zoh324de@gmail.com'))