const Some = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b12e856d4msh1c360760ad5d8a2p1e5b91jsn3ba5271151aa',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then((response) =>{
            
            cityname.innerHTML = "Weather at " + response.location.name
            Details.innerHTML = "Temperature : " + response.current.temp_c + " degree Celcius"
            region.innerHTML = "Region : " + response.location.region
            country.innerHTML ="Country : " + response.location.country
            localtime.innerHTML ="Local Time : " + response.location.localtime

        })
        .catch(err => {console.error(err)
          cityname.innerHTML = "City doesn't exist.."
          Details.innerHTML = "Or Search Nearby City.."
        });
}

searchbtn.addEventListener("click",(e) => {
    e.preventDefault();
    Some(searchinput.value)
    
})