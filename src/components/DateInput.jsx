import React from "react";

const DateInput = ({ date, setDate }) => {
	return (
		<div className='d-flex input_field_style'>
			<input
				type='date'
				value={date || ""}
				onChange={(e) => setDate(e.target.value)}
			/>
		</div>
	);
};

export default DateInput;
