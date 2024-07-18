import React from "react";

import { Name } from "../../pages/Home/HomeStyled";
import {
	ContProyectItems,
	ProyectCont,
	ProyectItem,
	ProyectItemImg,
	ProyectItemSkillsCont,
	ProyectItemTitle,
} from "./ProyectsStyled";
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
const Proyects = () => {
	return (
		<>
			<ProyectCont>
				<Name>Proyects</Name>
				<ContProyectItems>
					<ProyectItem>
						<a href="https://integrador-react-iota.vercel.app/" target="_blank">
							<ProyectItemImg src={Ecommerce} alt="E-commerce" />
						</a>
						<ProyectItemTitle>E-commerce</ProyectItemTitle>
						<ProyectItemSkillsCont>
							<FaHtml5 />
							<FaCss3Alt />
							<RiJavascriptFill />
							<IoLogoReact />
							<SiRedux />
						</ProyectItemSkillsCont>
					</ProyectItem>
					<ProyectItem>
						<a href="https://api-back-six.vercel.app/" target="_blank">
							<ProyectItemImg src={Api} alt="Api (e-commerce)" />
						</a>
						<ProyectItemTitle>Api e-commerce</ProyectItemTitle>
						<ProyectItemSkillsCont>
							<FaHtml5 />
							<BiLogoTypescript />
							<FaNodeJs />
							<SiExpress />
							<SiMongodb />
						</ProyectItemSkillsCont>
					</ProyectItem>
					<ProyectItem>
						<a href="https://ta-te-ti-orcin-rho.vercel.app/" target="_blank">
							<ProyectItemImg src={Tateti} alt="tateti" />
						</a>
						<ProyectItemTitle>Ta-Te-Ti</ProyectItemTitle>
						<ProyectItemSkillsCont>
							<FaHtml5 />
							<FaCss3Alt />
							<RiJavascriptFill />
							<IoLogoReact />
						</ProyectItemSkillsCont>
					</ProyectItem>
					<ProyectItem>
						<a href="https://pagina-seven.vercel.app/" target="_blank">
							<ProyectItemImg src={Landing} alt="landing" />
						</a>
						<ProyectItemTitle>Landing</ProyectItemTitle>
						<ProyectItemSkillsCont>
							<FaHtml5 />
							<FaCss3Alt />
						</ProyectItemSkillsCont>
					</ProyectItem>
				</ContProyectItems>
			</ProyectCont>
		</>
	);
};

export default Proyects;
