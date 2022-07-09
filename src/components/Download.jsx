import React from "react";

const Download = ({ exportData }) => {
	return (
		<div className='m-3 d-flex justify-content-center'>
			<button className='p-2 bg-secondary text-white' onClick={exportData}>
				Download
			</button>
		</div>
	);
};

export default Download;
