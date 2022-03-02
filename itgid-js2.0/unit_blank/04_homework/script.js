function out(id, name) {
    console.log(name)
    document.querySelector(id).innerHTML = name
}

fetch('https://api.openweathermap.org/data/2.5/weather?lat=53.9024716&lon=27.5618225&appid=id_key')

.then(function(resp) {
        return resp.json()
    })
    .then(function(data) {

        console.log(data)
        out(".city_name", data.name)
        out(".temp", `${Math.floor(data.main.temp - 273.15)} &#176;`)
        out('.oblaka', `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`)

    })