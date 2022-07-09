import React from "react";

const StaticInputs = ({
	type,
	staticValues,
	name,
	handleChange,
	staticValuesValidation,
	errorMessage,
}) => {
	return (
		<div className='d-flex input_field_style '>
			<div className='d-flex flex-column'>
				<input
					type={type}
					value={staticValues}
					name={name}
					onChange={handleChange}
				/>
				{staticValuesValidation ? (
					<span className='text-danger'>{errorMessage}</span>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default StaticInputs;
