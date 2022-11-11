 
//  function sameLength (str1, str2) {
//      if (str1.length === str2.length){
//          console.log(true);
//      }
//      else {
//          console.log(false);
//      }
//  }

//  sameLength("tree", "clue");


////////////////////////////////////////////////////////
13

 function shorterString(x,y,z,n,e){
    rr=x.length;
    nn = x
    if (rr>y.length) {
        rr = y.length
        nn = y
    }
    if (rr>z.length) {
        rr= z.length
        nn = z
    }
    if (rr>n.length){
        rr=n.length
        nn = n
    }
    if (rr>e.length){
        rr= e.length
        nn = e
    }
    return nn
 }


 document.write(shorterString("my name","karam","school","ahmad","ali")) ;
