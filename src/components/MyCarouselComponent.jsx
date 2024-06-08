import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function MyCarouselComponent({ city }) {
	if (!city.images || city.images.length === 0) {
		// Если в базе данных нет информации о картинках для карусели, вернуть null
		return null;
	}

	return (
		<CCarousel controls indicators className="carousel-custom">
			{city.images.map((image, index) => (
				<CCarouselItem key={index} className="carousel-item-custom">
					<CImage className="d-block w-100 carousel-image" src={image.img} alt={`slide ${index + 1}`} />
				</CCarouselItem>
			))}
		</CCarousel>
	);
}

export default MyCarouselComponent;
