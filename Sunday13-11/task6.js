
console.log(readyToPutInTheDOM([
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
    
    function readyToPutInTheDOM(arr){
        let read=arr.map((arr=>{
        console.log('<h1>'+arr.name +'</h1>'+'<h2>'+arr.age+'</h2>')
        
        }))
         }