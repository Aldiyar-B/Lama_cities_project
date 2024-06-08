import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Reviews = ({ city }) => {
	const [value, setValue] = React.useState(2);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center', // Центрирование по горизонтали
				alignItems: 'center', // Центрирование по вертикали
				flexDirection: 'column', // Содержимое в столбец
			}}
		>

			<Rating
				style={{ fontSize: 50 }}
				name="simple-controlled"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				max={5}
			/>
		</Box>
	);
};

export default Reviews;
