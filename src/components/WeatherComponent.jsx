import React, { useState, useEffect } from 'react';

const WeatherComponent = ({ city }) => {
	const [weatherData, setWeatherData] = useState(null);
	const apiKey = 'e784bb5d1dbe94b61e8d8a7cbe427984';

	useEffect(() => {
		const fetchWeather = async () => {
			try {

				const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.nameEng}&appid=${apiKey}&units=metric`);
				const data = await response.json();
				console.log(data)
				setWeatherData(data);
			} catch (error) {
				console.error('Error fetching weather data:', error);
			}
		};

		fetchWeather();
	}, [city, apiKey]);

	if (!weatherData) {
		return <div>Loading weather data...</div>;
	}

	const { main, weather } = weatherData;

	return (
		<div style={{ fontFamily: "Marmelad" }}>
			<h3>Погода в {city.name}</h3>
			<p>Температура: {main.temp} °C</p>
			<p>Погода: {weather[0].description}</p>
		</div>
	);
};

export default WeatherComponent;
