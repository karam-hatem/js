async function getData(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters")
    const data= await response.json();
    console.log(response);
    console.log(data);
    // var table

    var tabel= `<table border=2px>`;
    tabel+="<tr>";
    tabel+="<th>"+"Name"+"</th>";
    tabel+="<th>"+"Nick name "+"</th>";
    tabel+="<th>"+"Image "+"</th>";
    tabel+="</tr>";

    data.map((ele)=>{
        tabel+="<tr>";
        tabel+="<td>"+ ele.name +"</td>";
        tabel+="<td>"+ ele.nickename +"</td>";
        tabel+="<td>"+`<img src=${ele.img} style="width:200px;"`+"</td>";
        tabel+="</tr>";
    })
    tabel+="</table>";
    document.getElementById("data").innerHTML=tabel;
}
function clearData(){
document.getElementById("data").innerHTML="";


}