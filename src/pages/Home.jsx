import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { citiesList } from '../helpers/data'
import { Link } from 'react-router-dom';
import '../index.css'
import Footer from './Footer';
export default function Home() {
	return (
		<div className='cities' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
			{citiesList.map((city) => (
				<div key={city.id} style={{ margin: '10px', width: "100%", maxWidth: 345 }}>
					<Link to={`/city/${city.id}`} style={{ textDecoration: 'none' }}>
						<Card sx={{ width: "100%", maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="300"
									image={city.image}
									title={city.name}
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{city.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Население: {city.population}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				</div>
			))}
			<Footer />
		</div>
	)
}
