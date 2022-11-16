 let arr= [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]

 
     var newArr= arr.map(function(value){
     return value.first + value.last
    })
   console.log(newArr);