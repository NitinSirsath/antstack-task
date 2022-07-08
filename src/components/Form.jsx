import React from "react";
import { useState } from "react";
import ContactField from "./ContactField";
import Skills from "./Skills";
import StaticInputs from "./StaticInputs";
import ViewData from "./ViewData";

const Form = () => {
	const initialValues = {
		first: "",
		designation: "",
	};
	const [staticValues, setStaticValues] = useState(initialValues);

	const handleChange = (e) => {
		setStaticValues({ ...staticValues, [e.target.name]: e.target.value });
	};

	const handleAdd = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={handleAdd}>
				<div className='container border border-dark form'>
					<div className='d-flex flex-column gap-3'>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Name
							</label>

							<StaticInputs
								staticValues={staticValues.name}
								type={"text"}
								label={"Name"}
								handleChange={handleChange}
								name={"name"}
							/>
						</div>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Designation
							</label>
							<StaticInputs
								staticValues={staticValues.designation}
								type={"text"}
								label={"Designation"}
								handleChange={handleChange}
								name={"designation"}
							/>
						</div>
						<div className='d-flex input_table_style contact_field_container'>
							<label className='label_table-style ' htmlFor=''>
								Contact Details
							</label>
							<ContactField />
						</div>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Skills
							</label>
							<Skills />
						</div>
						<div className='d-flex input_table_style'>
							<label className='label_table-style' htmlFor=''>
								Date of Birth
							</label>
							<StaticInputs
								// staticValues={staticValues.dob}
								type={"date"}
								label={"Date of Birth"}
								handleChange={handleChange}
								name={"date"}
							/>
						</div>
					</div>
				</div>
				<div className='d-flex justify-content-center m-3'>
					<button type='submit' className='p-2 bg-secondary text-white'>
						Add Employee
					</button>
				</div>
			</form>
			<ViewData />
		</>
	);
};

export default Form;
