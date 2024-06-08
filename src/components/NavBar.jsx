import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }} className="navbar">
			<AppBar position="static">
				<Toolbar>
					<MapIcon style={{ marginRight: '10px', fontSize: '50px' }} />

					<Typography variant="h5" component={Link} to="/" sx={{ flexGrow: 1, fontFamily: "Neucha", textDecoration: "none", color: "white" }}>
						Путеводитель по городам России					</Typography>
					<Button component={Link} to="/" color="inherit">Home</Button>
					{/* <Button component={Link} to="/" color="inherit">Moscow</Button> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
