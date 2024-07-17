import React from "react";
import { ContIcons, Habs, Name } from "../../pages/Home/HomeStyled";
import { SiExpress, SiHtml5, SiMongodb, SiRedux } from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";

const Skills = () => {
	return (
		<Habs>
			<Name>Skills</Name>
			<ContIcons>
				<SiHtml5 style={{ color: "orange", fontSize: "37px" }} />
				<FaCss3Alt style={{ color: "lightblue", fontSize: "42px" }} />
				<RiJavascriptFill style={{ color: "yellow", fontSize: "50px" }} />
				<BiLogoTypescript style={{ color: "#3636b6d1", fontSize: "50px" }} />
				<IoLogoReact style={{ color: "#1a1affda", fontSize: "50px" }} />
				<SiRedux style={{ color: "violet", fontSize: "45px" }} />
				<FaNodeJs style={{ color: "lightgreen", fontSize: "45px" }} />
				<SiExpress style={{ color: "#d2d2ff", fontSize: "45px" }} />
				<SiMongodb style={{ color: "green", fontSize: "40px" }} />
			</ContIcons>
		</Habs>
	);
};

export default Skills;
