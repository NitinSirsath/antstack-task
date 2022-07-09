import React from "react";
import { useState } from "react";

const DateInput = ({ date, setDate }) => {
	// const [date, setDate] = useState();
	// console.log(date);

	return (
		<div className='d-flex input_field_style'>
			<input
				type='date'
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>
		</div>
	);
	// const [focus, setFocused] = useState(false);
	// const [hasValue, setHasValue] = useState(false);
	// const onFocus = () => setFocused(true);
	// const onBlur = () => setFocused(false);
	// return (
	// 	<div className='d-flex input_field_style'>
	// 		<input
	// 			onFocus={onFocus}
	// 			onBlur={onBlur}
	// 			placeholder='date'
	// 			onChange={(e) => {
	// 				if (e.target.value) setHasValue(true);
	// 				else setHasValue(false);
	// 			}}
	// 			label='Date'
	// 			type={hasValue || focus ? "datetime-local" : "text"}
	// 		/>
	// 	</div>
	// );
};

export default DateInput;
