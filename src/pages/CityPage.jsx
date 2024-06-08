import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import AttractionCard from '../components/AttractionCard';
import FoodCard from '../components/FoodCard';
// import 'react-image-gallery/styles/css/image-gallery.css';
import { useParams } from 'react-router-dom';
import { citiesList } from '../helpers/data';
import MyCarouselComponent from '../components/MyCarouselComponent';
import Stars from '../components/Starts'

import Footer from './Footer';

export default function CityPage() {
	const { id } = useParams();
	const city = citiesList.find(city => city.id === parseInt(id));

	if (!city) {
		return <div>Город не найден</div>;
	}


	const historyParagraphs = city.history ? city.history.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph}</p>
	)) : null;

	const locationParagraphs = city.location ? city.location.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph}</p>
	)) : null;
	const weather = city.weather ? city.weather.split('\n').map((paragraph, index) => (
		<p key={index}>{paragraph}</p>
	)) : null;


	return (
		<div style={{ fontSize: 20 }}>
			<h2 className='cities__title' style={{ fontSize: 65, marginTop: '50px' }}>{city.name}</h2>
			<p style={{ fontSize: 20 }}>Население: {city.population}</p>
			<h3 className='cities__title'>История города</h3>
			<p>{historyParagraphs}</p>
			<h3 className='cities__title'>Географическое местоположение</h3>
			<p>{locationParagraphs}</p>



			<MyCarouselComponent city={city} />

			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Местные достопримечательности</h3>

			<div className="attraction-cards">
				{city.attractions && city.attractions.map((attraction, index) => (
					<AttractionCard key={index} attraction={attraction} />
				))}
			</div>
			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Еда</h3>
			<div className="food-cards">
				{city.food && city.food.map((food, index) => (
					<FoodCard key={index} food={food} />
				))}
			</div>

			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Местные события</h3>
			<ul>
				{city.local_events && city.local_events.map((event, index) => (
					<li key={index}>{event.description}</li>
				))}
			</ul>

			<h3 className='cities__title' style={{ marginTop: 50, marginBottom: 50 }}>Интересные факты</h3>
			<ul>
				{city.facts && city.facts.map((fact, index) => (
					<li key={index}>{fact.description}</li>
				))}
			</ul>

			<h3 className='cities__title'>Погода</h3>
			<p> {weather}</p>
			<WeatherComponent city={city} />

			<h3 className='cities__title' > Оцените город! </h3>
			<Stars style={{ marginBottom: " 50px" }} />
			{/* <Reviews /> */}

			<Footer style={{}} />
		</div>
	);
}
