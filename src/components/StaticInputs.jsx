import React from "react";

const StaticInputs = ({ type, staticValues, name, handleChange }) => {
	return (
		<div className='d-flex input_field_style'>
			<input
				type={type}
				value={staticValues}
				name={name}
				onChange={handleChange}
			/>
		</div>
	);
};

export default StaticInputs;
