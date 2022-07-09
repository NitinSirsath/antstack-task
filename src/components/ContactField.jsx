import React from "react";
import { useState } from "react";
import AddButton from "./AddButton";

const ContactField = ({ contactData, setContactData, intialContact }) => {
	// const [contactData, setContactData] = useState([intialValue]);
	const [validation, setValidation] = useState(true);

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

	const handleAdd = (idx) => {
		if (contactData[idx].number.length === 10) {
			setValidation(true);
			const dataContact = {
				type: contactData.type,
				number: contactData.number,
			};

			setContactData([...contactData, dataContact]);

			console.log(contactData);
		} else {
			setValidation(false);
		}
		// const dataContact = {
		// 	type: contactData.type,
		// 	number: contactData.number,
		// };
		// console.log(contactData[idx].number.length);
		// setContactData([...contactData, dataContact]);
	};
	const deleteContact = (idx) => {
		const list = [...contactData];
		list.splice(idx, 1);
		setContactData(list);
	};

	return (
		<div className='input_field_style gap-3 '>
			{contactData.map((contact, idx) => {
				return (
					<div className='d-flex contact_field' key={idx}>
						<select
							required
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
								className='number_input'
								required={idx === 0}
								name='number'
								type='number'
								min='6000000000'
								max='9999999999'
								value={contact.number || ""}
								placeholder='Phone Number'
								onChange={(e) => handleContactChange(e, idx)}
							/>
						</div>
						{contactData.length > 1 && (
							<button onClick={() => deleteContact(idx)}>X</button>
						)}
						{contactData.length - 1 === idx && contactData.length < 4 && (
							<button type='button' onClick={() => handleAdd(idx)}>
								<AddButton />
							</button>
						)}
					</div>
				);
			})}
			{!validation ? (
				<span className='text-danger'>enter 10 digit number</span>
			) : (
				""
			)}
		</div>
	);
};

export default ContactField;
