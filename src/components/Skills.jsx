import React, { useState } from "react";
import AddButton from "./AddButton";

const Skills = () => {
	const [skillVal, setSkillVal] = useState("");
	const [skillData, setSkillData] = useState([]);

	const handleChange = (e) => {
		setSkillVal((prevVal) => (prevVal = e.target.value));
	};
	const handleAdd = (val) => {
		if (val) {
			setSkillData([...skillData, val]);
			setSkillVal("");
		}
	};
	console.log(skillData);

	return (
		<div className='d-flex input_field_style gap-3'>
			<input
				type='text'
				name=''
				onChange={handleChange}
				value={skillVal}
				id=''
			/>
			<button onClick={() => handleAdd(skillVal)}>
				<AddButton />
			</button>
		</div>
	);
};

export default Skills;
