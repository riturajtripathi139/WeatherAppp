const getWeather = async (cityName) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ed787fa48278171b96976cb8b2c1bd03`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;