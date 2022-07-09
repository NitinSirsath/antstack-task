import React from "react";
import { useState } from "react";

import ContactField from "./ContactField";
import DateInput from "./DateInput";
import Download from "./Download";
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

	// const formDataObject = {
	// 	name: "",
	// 	designation: "",
	// 	contacts: [],
	// 	skills: [],
	// 	dob: "",
	// };

	const [staticValues, setStaticValues] = useState(initialValues);
	const [contactData, setContactData] = useState([intialContact]);
	const [skillData, setSkillData] = useState([]);
	const [birthDate, setBirthDate] = useState();
	// const [formData, setFormData] = useState(formDataObject);
	const [employeeData, setEmployeeData] = useState([]);

	const [staticValuesValidation, setStaticValuesValidation] = useState(false);

	const handleChange = (e) => {
		setStaticValues({ ...staticValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (staticValues.name && staticValues.designation) {
			const tempObject = {
				name: staticValues.name,
				designation: staticValues.designation,
				contacts: [...contactData],
				skills: [...skillData],
				dob: birthDate,
			};
			// let personData = [...staticValues, ...contactData, ...skillData];
			console.log(staticValues, contactData, skillData, birthDate);
			// setFormData(tempObject);
			setEmployeeData([...employeeData, tempObject]);

			console.log([...employeeData, tempObject], "data");
			// console.log(formData, "finaldata");
			setBirthDate("");
			setContactData([intialContact]);
			setSkillData([]);
			setStaticValuesValidation(false);
			setStaticValues(initialValues);
			// setData(...staticValues);
		} else {
			setStaticValuesValidation(!staticValuesValidation);
		}
	};
	const exportData = () => {
		const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
			JSON.stringify(employeeData)
		)}`;
		const link = document.createElement("a");
		link.href = jsonString;
		link.download = "EmployeeData.json";

		link.click();
	};
	const employeeNumber = employeeData.length;
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='border bg-light border-dark form'>
					<span className=' bg-secondary text-white p-1 rounded'>
						Employee # {employeeNumber + 1}
					</span>

					<div className='my-3 d-flex main_form_container_mobile flex-column gap-3'>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor='name'>
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
							<label className='label_table-style' htmlFor='designation'>
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
						Add Employee
					</button>
				</div>
			</form>
			{/* <AddEmployee
				employeeData={employeeData}
				formData={formData}
				setEmployeeData={setEmployeeData}
			/> */}

			<div>
				<ViewData />
				<Download exportData={exportData} />
			</div>
		</>
	);
};

export default Form;
