import React from "react";

import { Name } from "../../pages/Home/HomeStyled";

import Ecommerce from "../../assets/img/E-commerce.png";
import Api from "../../assets/img/Api-back.png";
import Tateti from "../../assets/img/Tateti.png";
import Landing from "../../assets/img/Landing.png";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import {
	ContProjectItems,
	ProjectCont,
	ProjectItem,
	ProjectItemImg,
	ProjectItemSkillsCont,
	ProjectItemTitle,
} from "./ProjectsStyled";
const Projects = () => {
	return (
		<>
			<ProjectCont>
				<Name>Projects</Name>
				<ContProjectItems>
					<ProjectItem>
						<a href="https://integrador-react-iota.vercel.app/" target="_blank">
							<ProjectItemImg src={Ecommerce} alt="E-commerce" />
						</a>
						<ProjectItemTitle>E-commerce</ProjectItemTitle>
						<ProjectItemSkillsCont>
							<FaHtml5 />
							<FaCss3Alt />
							<RiJavascriptFill />
							<IoLogoReact />
							<SiRedux />
						</ProjectItemSkillsCont>
					</ProjectItem>
					<ProjectItem>
						<a href="https://api-back-six.vercel.app/" target="_blank">
							<ProjectItemImg src={Api} alt="Api (e-commerce)" />
						</a>
						<ProjectItemTitle>Api e-commerce</ProjectItemTitle>
						<ProjectItemSkillsCont>
							<FaHtml5 />
							<BiLogoTypescript />
							<FaNodeJs />
							<SiExpress />
							<SiMongodb />
						</ProjectItemSkillsCont>
					</ProjectItem>
					<ProjectItem>
						<a href="https://ta-te-ti-orcin-rho.vercel.app/" target="_blank">
							<ProjectItemImg src={Tateti} alt="tateti" />
						</a>
						<ProjectItemTitle>Ta-Te-Ti</ProjectItemTitle>
						<ProjectItemSkillsCont>
							<FaHtml5 />
							<FaCss3Alt />
							<RiJavascriptFill />
							<IoLogoReact />
						</ProjectItemSkillsCont>
					</ProjectItem>
					<ProjectItem>
						<a href="https://pagina-seven.vercel.app/" target="_blank">
							<ProjectItemImg src={Landing} alt="landing" />
						</a>
						<ProjectItemTitle>Landing</ProjectItemTitle>
						<ProjectItemSkillsCont>
							<FaHtml5 />
							<FaCss3Alt />
						</ProjectItemSkillsCont>
					</ProjectItem>
				</ContProjectItems>
			</ProjectCont>
		</>
	);
};

export default Projects;
