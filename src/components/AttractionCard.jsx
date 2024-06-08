// AttractionCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const AttractionCard = ({ attraction }) => {
	return (
		<Card sx={{ width: "100%", maxWidth: 245 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={attraction.image}
					alt={attraction.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{attraction.name};
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{attraction.description};
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default AttractionCard;
