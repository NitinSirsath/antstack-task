import React, { useState } from "react";
import AddButton from "./AddButton";

const Skills = ({ skillData, setSkillData }) => {
	const [skillVal, setSkillVal] = useState("");

	const handleSkillChange = (e) => {
		setSkillVal((prevVal) => (prevVal = e.target.value));
	};
	const handleSkillAdd = (val) => {
		if (val) {
			setSkillData([...skillData, val]);
			setSkillVal("");
		}
	};
	const deleteSkill = (i) => {
		const list = [...skillData];
		list.splice(i, 1);
		setSkillData(list);
	};

	return (
		<div className='d-flex flex-column input_field_style gap-3'>
			<div className='d-flex gap-3'>
				<input
					type='text'
					name=''
					onChange={handleSkillChange}
					value={skillVal}
					id=''
				/>
				<button type='button' onClick={() => handleSkillAdd(skillVal)}>
					<AddButton />
				</button>
			</div>
			<ul className='skills_list'>
				{skillData.length
					? skillData.map((skill, index) => (
							<div className='chip' key={index}>
								<li>{skill}</li>
								<div
									className='delete_button'
									onClick={() => deleteSkill(index)}>
									✕
								</div>
							</div>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default Skills;
