

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon= document.querySelector(".weather-icon");


const fetchdata= async()=>{
const response = await Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=ebd2ed8c3789466157f766bb2a08c23b`),
    fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=ebd2ed8c3789466157f766bb2a08c23b`)
  ])
  const data= await response.json();
  
    data.map((ele)=>{
    let x= document.querySelector(".place")
    x.innerHTML= `${ele.city}`
    let y= document.querySelector(".para1")
    y.innerHTML= `${djdj}`
    z= document.querySelector(".para2")
    z.innerHTML= `${ele.main.temp} + "°c"; `
    })
}
fetchdata()

const press=(city)=>{
    if(searchbox.value==="")
    {
        alert("please enter city name")
    }
    else{
        let x= document.querySelector(".place")
        x.innerHTML= `${ele.city.name}`
        let y= document.querySelector(".para1")
        y.innerHTML= `${djdj}`
        z= document.querySelector(".para2")
        z.innerHTML= `${ele.main.temp} + "°c";`
        
     
    }
}
// searchbox.addEventListener("keypress", ()=>{
//     fetchdata(searchbox.value);
// })
