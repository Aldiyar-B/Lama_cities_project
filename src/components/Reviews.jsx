import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

const reviews = [
	{
		id: 1,
		username: 'John Doe',
		rating: 4,
		comment: 'Great city with lots of attractions!',
	},
	{
		id: 2,
		username: 'Jane Smith',
		rating: 5,
		comment: 'Absolutely loved my time in this city. Highly recommended!',
	},
	// Добавьте дополнительные отзывы, если необходимо
];

const Reviews = () => {
	return (
		<Box>
			<Typography variant="h5" gutterBottom>
				Отзывы о городе
			</Typography>
			{reviews.map((review) => (
				<Box key={review.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
					<Avatar sx={{ mr: 2 }}>U</Avatar>
					<Box>
						<Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
							{review.username}
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
							<Rating value={review.rating} readOnly />
							<Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
								{review.rating}
							</Typography>
						</Box>
						<Typography variant="body1" sx={{ marginTop: 1 }}>
							{review.comment}
						</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default Reviews;
