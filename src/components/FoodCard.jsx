// FoodCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const FoodCard = ({ food }) => {
	return (
		<Card sx={{ width: "100%", maxWidth: 245 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={food.image}
					alt={food.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{food.name};
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{food.description};
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default FoodCard;
