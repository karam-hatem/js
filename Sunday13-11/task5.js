

 console.log(makeStrings([
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

  function makeStrings(arr){

    let arrnew =arr.map((arr =>{
    if (arr.age>=17){
      console.log(arr.name + " can go to The Matrix")
    }
    else {
      console.log(arr.name + " is under age!!")
    }
    })
    )
    }

