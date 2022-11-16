var arr = [2, 5,100];
  
var newArr = arr.map(function(val, index){
    return arr[index].toString();
})
  
console.log(newArr);