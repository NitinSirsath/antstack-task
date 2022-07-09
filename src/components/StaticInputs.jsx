import React from "react";

const StaticInputs = ({
	type,
	staticValues,
	name,
	handleChange,

	required,
}) => {
	return (
		<div className='d-flex input_field_style '>
			<div className='d-flex flex-column'>
				<input
					type={type}
					value={staticValues}
					name={name}
					onChange={handleChange}
					required={required}
				/>
			</div>
		</div>
	);
};

export default StaticInputs;
