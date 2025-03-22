const button=document.getElementById("button");
const country=document.getElementById("country");
const temperature=document.getElementById("temperature");
let i=0;
button.onclick=()=>{
    axios
    .get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        temperature.textContent="";
        country.textContent=response.data[i].city;
        temperature.textContent=response.data[i].temperature;
        
        i++;
    })
    .catch(function(error){
        console.log(error);
    })
} 