
 function canIGetADrivingLicense (age){
     if ( age < 20 ) {
         console.log(`please come back after ${20 - age} years to get one`);
     }else {
         console.log("yes you can");
     }
 }

 canIGetADrivingLicense(16)