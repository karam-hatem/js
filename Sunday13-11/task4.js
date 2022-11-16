

//  const namesOnly= [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//    ];



// var newArr=namesOnly.map(function(name){

//     return newArr;
// })
// console.log(newArr);




console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
           name: "Eric Jones",
           age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
       {
           name: "Kayne West",
          age: 16
      },
       {
           name: "Bob Ziroll",
           age: 100
       }
      ])); 
       function namesOnly(arr){

        let arrnew=arr.map(a=>a.name);
        return arrnew ;
       }