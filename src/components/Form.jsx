import React from "react";
import { useState } from "react";
import ContactField from "./ContactField";
import DateInput from "./DateInput";
import Skills from "./Skills";
import StaticInputs from "./StaticInputs";
import ViewData from "./ViewData";

const Form = () => {
	const initialValues = {
		name: "",
		designation: "",
	};

	const intialContact = {
		type: "",
		number: "",
	};

	const formDataObject = {
		name: "",
		designation: "",
		contacts: [],
		skills: [],
		dob: "",
	};

	const [staticValues, setStaticValues] = useState(initialValues);
	const [contactData, setContactData] = useState([intialContact]);
	const [skillData, setSkillData] = useState([]);
	const [birthDate, setBirthDate] = useState();
	const [formData, setFormData] = useState(formDataObject);

	const [staticValuesValidation, setStaticValuesValidation] = useState(false);

	const handleChange = (e) => {
		setStaticValues({ ...staticValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (staticValues.name && staticValues.designation) {
			// let personData = [...staticValues, ...contactData, ...skillData];
			// console.log(staticValues, contactData, skillData, date);
			setFormData({
				name: staticValues.name,
				designation: staticValues.designation,
				contacts: [...contactData],
				skills: [...skillData],
				dob: birthDate,
			});
			console.log(formData, "finaldata");
			setStaticValuesValidation(false);
			setStaticValues(initialValues);
			// setData(...staticValues);
		} else {
			setStaticValuesValidation(!staticValuesValidation);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='container border bg-light border-dark form'>
					<div className='d-flex flex-column gap-3'>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Name <span className='text-danger'> *</span>
							</label>
							<StaticInputs
								staticValues={staticValues.name}
								type={"text"}
								label={"Name"}
								handleChange={handleChange}
								name={"name"}
								staticValuesValidation={staticValuesValidation}
								errorMessage={"Please enter your name"}
							/>
						</div>

						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Designation <span className='text-danger'> *</span>
							</label>
							<StaticInputs
								staticValues={staticValues.designation}
								type={"text"}
								label={"Designation"}
								handleChange={handleChange}
								name={"designation"}
								staticValuesValidation={staticValuesValidation}
								errorMessage={"Please enter your designation"}
							/>
						</div>
						<div className='d-flex input_table_style contact_field_container'>
							<label className='label_table-style ' htmlFor=''>
								Contact Details
							</label>
							<ContactField
								contactData={contactData}
								setContactData={setContactData}
								intialContact={intialContact}
							/>
						</div>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Skills
							</label>
							<Skills skillData={skillData} setSkillData={setSkillData} />
						</div>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Date of Birth
							</label>
							<DateInput date={birthDate} setDate={setBirthDate} />
						</div>
					</div>
				</div>
				<div className='d-flex justify-content-center m-3'>
					<button type='submit' className='p-2 bg-secondary text-white'>
						Submit
					</button>
				</div>
			</form>
			<ViewData />
		</>
	);
};

export default Form;
