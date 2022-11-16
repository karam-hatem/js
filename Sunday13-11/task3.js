let arr =["john", "JACOB", "jinGleHeimer", "schmidt"];

var newarr= arr.map(function(name){
    return name.toUpperCase()[0] + name.slice(1).toLocaleLowerCase()
})
console.log(newarr);