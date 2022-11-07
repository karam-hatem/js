
// Whole Square : is the number that it's square root is integer.
y = Number(prompt("input your number"))
function next_sqr(num) {
    // to ensure that input is a whole square
    if (((num**.5)%1)==0) {
        // now i am looking for the next whole square
        for (i=1;true;i++) {
            y++
            // finde it go out of the loop
            if (((y**.5)%1)==0) {
                break;
            }
        }
        return y;
    } else {
        // input is not a whole square
        alert("not a square")
    }
}
// alert the user 
alert(`the next sqr num is ${next_sqr (y)}`)
