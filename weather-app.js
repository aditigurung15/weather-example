const apikey= "ebd2ed8c3789466157f766bb2a08c23b";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox= document.getElementById("search");
const weathericon= document.querySelector(".weather-icon");
const searchbtn= document.querySelector("#searchbtn");


const checkweather=async(city)=>{
    const response= await fetch(apiurl + city + `&appid=${apikey}`)

     const data= await response.json();
    console.log(data);

    document.querySelector(".place").innerHTML= data.name;
    document.querySelector(".para1").innerHTML= "Chance of rain:" + data.rain + "%";
    document.querySelector(".para2").innerHTML= data.main.temp + "°c";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";

   


    if(data.weather[0].main=="Clouds"){
        weathericon.src = "images/clouds.png"
    }
    
  

    else if(data.weather[0].main=="Clear"){
        weathericon.src = "images/clear.png"
    }
    
    else if(data.weather[0].main=="Rain"){
        weathericon.src = "images/rain.png"
    }
    
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src = "images/drizzle.png"
    }
    
    else if(data.weather[0].main=="Mist"){
        weathericon.src = "images/mist.png"
    }

    
}
checkweather()

// searchbox.addEventListener("keypress", ()=>{
// })


const apiurl2="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const image1= document.querySelector(".image1 img");
const image2= document.querySelector(".image2 img");
const image3= document.querySelector(".image3 img");
const image4= document.querySelector(".image4 img" );
const image5= document.querySelector(".image5 img");
const image6= document.querySelector(".image6 img");


const threehourWeather=async(city)=>{
    const response= await fetch(apiurl2 + city + `&appid=${apikey}`)
     const data= await response.json();
    console.log(data);

    document.querySelector(".time1").innerHTML= data.list[0].dt_txt;
    document.querySelector(".time2").innerHTML= data.list[1].dt_txt;
    document.querySelector(".time3").innerHTML= data.list[2].dt_txt;
    document.querySelector(".time4").innerHTML= data.list[3].dt_txt;
    document.querySelector(".time5").innerHTML= data.list[4].dt_txt;
    document.querySelector(".time6").innerHTML= data.list[5].dt_txt;
    document.querySelector(".degree1").innerHTML= data.list[0].main.temp + "°c";
    document.querySelector(".degree2").innerHTML= data.list[1].main.temp + "°c";
    document.querySelector(".degree3").innerHTML= data.list[2].main.temp + "°c";
    document.querySelector(".degree4").innerHTML= data.list[3].main.temp + "°c";
    document.querySelector(".degree5").innerHTML= data.list[4].main.temp + "°c";
    document.querySelector(".degree6").innerHTML= data.list[5].main.temp + "°c";


    if(data.list[0].weather[0].main=="Clouds"){
        image1.src = "images/clouds.png"
    }
    

    else if(data.list[0].weather[0].main=="Clear"){
        image1.src = "images/clear.png"
    }
    
    else if(data.list[0].weather[0].main=="Rain"){
        image1.src = "images/rain.png"
    }
    
    else if(list[0].weather[0].main=="Drizzle"){
        image1.src = "images/drizzle.png"
    }
    
    else if(data.list[0].weather[0].main=="Mist"){
        image1.src = "images/mist.png"
    }


    if(data.list[1].weather[0].main=="Clouds"){
        image2.src = "images/clouds.png"
    }
    

    else if(data.list[1].weather[0].main=="Clear"){
        image2.src = "images/clear.png"
    }
    
    else if(data.list[1].weather[0].main=="Rain"){
        image2.src = "images/rain.png"
    }
    
    else if(list[1].weather[0].main=="Drizzle"){
        image2.src = "images/drizzle.png"
    }
    
    else if(data.list[1].weather[0].main=="Mist"){
        image2.src = "images/mist.png"
    }


    if(data.list[2].weather[0].main=="Clouds"){
        image3.src = "images/clouds.png"
    }
    

    else if(data.list[2].weather[0].main=="Clear"){
        image3.src = "images/clear.png"
    }
    
    else if(data.list[2].weather[0].main=="Rain"){
        image3.src = "images/rain.png"
    }
    
    else if(data.list[2].weather[0].main=="Drizzle"){
        image3.src = "images/drizzle.png"
    }
    
    else if(data.list[2].weather[0].main=="Mist"){
        image3.src = "images/mist.png"
    }



    if(data.list[3].weather[0].main=="Clouds"){
        image4.src = "images/clouds.png"
    }
    

    else if(data.list[3].weather[0].main=="Clear"){
        image4.src = "images/clear.png"
    }
    
    else if(data.list[3].weather[0].main=="Rain"){
        image4.src = "images/rain.png"
    }
    
    else if(data.list[3].weather[0].main=="Drizzle"){
        image4.src = "images/drizzle.png"
    }
    
    else if(data.list[3].weather[0].main=="Mist"){
        image4.src = "images/mist.png"
    }

    if(data.list[4].weather[0].main=="Clouds"){
        image5.src = "images/clouds.png"
    }
    

    else if(data.list[4].weather[0].main=="Clear"){
        image5.src = "images/clear.png"
    }
    
    else if(data.list[4].weather[0].main=="Rain"){
        image5.src = "images/rain.png"
    }
    
    else if(data.list[4].weather[0].main=="Drizzle"){
        image5.src = "images/drizzle.png"
    }
    
    else if(data.list[4].weather[0].main=="Mist"){
        image5.src = "images/mist.png"
    }


    if(data.list[5].weather[0].main=="Clouds"){
        image6.src = "images/clouds.png"
    }
    

    else if(data.list[5].weather[0].main=="Clear"){
        image6.src = "images/clear.png"
    }
    
    else if(data.list[5].weather[0].main=="Rain"){
        image6.src = "images/rain.png"
    }
    
    else if(data.list[5].weather[0].main=="Drizzle"){
        image6.src = "images/drizzle.png"
    }
    
    else if(data.list[5].weather[0].main=="Mist"){
        image6.src = "images/mist.png"
    }

   



}

threehourWeather()

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
    threehourWeather(searchbox.value)
})
