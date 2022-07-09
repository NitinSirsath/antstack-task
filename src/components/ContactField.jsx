import React from "react";
import { useState } from "react";
import AddButton from "./AddButton";

const ContactField = ({ contactData, setContactData, intialContact }) => {
	// const [contactData, setContactData] = useState([intialValue]);

	const handleContactChange = (e, idx) => {
		const listData = [...contactData];
		// console.log(contactData, "contactc");
		// console.log(listData[idx].number);

		listData[idx].number = e.target.value;
		setContactData(listData);
	};

	const handleTypeChange = (e, idx) => {
		const listData = [...contactData];
		listData[idx].type = e.target.value;
		// listData[idx].number = listData[idx].number || "";
		setContactData(listData);
	};

	const handleAdd = () => {
		const dataContact = {
			type: contactData.type,
			number: contactData.number,
		};

		setContactData([...contactData, dataContact]);
		console.log(contactData);
	};

	return (
		<div className='input_field_style gap-3'>
			{contactData.map((contact, idx) => {
				return (
					<div className='d-flex gap-3' key={idx}>
						<select
							name='type'
							value={contact.type}
							onChange={(e) => handleTypeChange(e, idx)}
							id=''>
							<option value='type'>Type</option>
							<option value='primary'>Primary</option>
							<option value='emergency'>Emergency</option>
							<option value='work'>Work</option>
							<option value='home'>Home</option>
						</select>
						<div className='d-flex'>
							<input
								name='number'
								type='number'
								value={contact.number || ""}
								placeholder='Phone Number'
								onChange={(e) => handleContactChange(e, idx)}
							/>
						</div>
						{contactData.length - 1 === idx && contactData.length < 4 && (
							<button onClick={handleAdd}>
								<AddButton />
							</button>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ContactField;
