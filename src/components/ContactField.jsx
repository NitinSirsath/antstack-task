import React from "react";
import AddButton from "./AddButton";

const ContactField = () => {
	return (
		<div className='d-flex input_field_style gap-3'>
			<select name='' id=''>
				<option value='type' selected>
					Type
				</option>
				<option value='mobile2'>Mobile2</option>
				<option value='work'>Work</option>
				<option value='home'>Home</option>
			</select>
			<div className='d-flex'>
				<input type='number' placeholder='Phone Number' />
			</div>
			<AddButton />
		</div>
	);
};

export default ContactField;
