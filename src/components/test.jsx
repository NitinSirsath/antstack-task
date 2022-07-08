import { useState } from "react";

const Skillss = () => {
	const [skillVal, setSkillVal] = useState("");
	const [skills, setSkills] = useState([]);

	const handleChange = (e) => {
		setSkillVal((prevVal) => (prevVal = e.target.value));
	};

	const addSkill = (val) => {
		if (val) {
			setSkills([...skills, val]);
			setSkillVal("");
		}
	};
	console.log(skills);
	const deleteSkill = (i) => {
		const list = [...skills];
		list.splice(i, 1);
		setSkills(list);
	};

	return (
		<div>
			<ul>
				{skills.map((skill, index) => (
					<div key={index}>
						<li>{skill}</li>
						<div onClick={() => deleteSkill(index)}>close</div>
					</div>
				))}
			</ul>
			<input type='text' value={skillVal} onChange={handleChange} />
			<button onClick={() => addSkill(skillVal)}>add skill</button>
		</div>
	);
};

export default Skillss;
