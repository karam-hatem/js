


function calculateSupply(age,perday)
{
 let TotalNeeded = (perday * 365) * ( 100-age );
 console.log('you will need '+TotalNeeded+'cup of tea to last you until the ripe old age of' )  ;
}
calculateSupply(26,3);