import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function SelectAdult() {
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel variant="standard" htmlFor="uncontrolled-native">
					Adults
				</InputLabel>
				<NativeSelect
					defaultValue={0}
					inputProps={{
						name: "adults",
						id: "uncontrolled-native",
					}}
				>
					<option value={0}>0</option>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
					<option value={8}>8</option>
					<option value={9}>9</option>
				</NativeSelect>
			</FormControl>
		</Box>
	);
}
