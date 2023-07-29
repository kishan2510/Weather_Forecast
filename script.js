const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e036f069e2mshc7eb09b263df33bp1efd7bjsnd79335da4615',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather=(city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{      
    console.log(response)
    cloud_pct.innerHTML=response.cloud_pct
    temp.innerHTML=response.temp
    temp2.innerHTML=response.temp
    feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    wind_speed.innerHTML=response.wind_speed
    wind_speed2.innerHTML=response.wind_speed
    wind_degrees.innerHTML=response.wind_degrees
})
   .catch(err => console.error(err));
}
 submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
const delhi=getWeather("Delhi");




