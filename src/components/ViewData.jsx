import React from "react";
import { useState } from "react";

const ViewData = ({ employeeData }) => {
	const [toggle, setToggle] = useState(false);

	const toggleData = () => {
		setToggle((preV) => !preV);
	};
	return (
		<div className='m-3 d-flex flex-column  align-items-center justify-content-center'>
			<button
				type='button'
				onClick={toggleData}
				className='p-2 bg-secondary text-white'>
				{!toggle ? "View Data" : "Hide Data"}
			</button>
			<div className=''>
				{toggle ? (
					<pre className='border bg-light p-1 my-2'>
						{JSON.stringify(employeeData, null, 2)}
					</pre>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default ViewData;
