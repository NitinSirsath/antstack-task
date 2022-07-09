import React from "react";

const AddEmployee = ({ employeeData, formData, setEmployee }) => {
	const addNewEmployee = () => {
		setEmployee([...employeeData], formData);
		console.log(employeeData);
	};
	return (
		<div className='m-3 d-flex justify-content-center'>
			<button
				type='button'
				onClick={() => addNewEmployee()}
				className='p-2 bg-secondary text-white'>
				Add Employee
			</button>
		</div>
	);
};

export default AddEmployee;
