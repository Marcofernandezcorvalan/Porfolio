import React from "react";
import styled from "styled-components";
import imgPerfil from "../../assets/img/foto_de_perfil (2).png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export const Hero = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	/* gap: 30px; */
	background-color: var(--secondbg);
	/* background-color: #221f1f96; */
	padding: 25px 25px;
	border-radius: 10px;
	margin-top: 200px;
	margin-bottom: 100px;
	/* height: calc(100vh - 120px); */
`;

export const ContTitle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 50%;
`;

export const Name = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	color: #90ee90cb;
	width: 80%;
	text-align: center;
`;

export const ImgCont = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
`;

export const Img = styled.img`
	border-radius: 100px;
	width: 50%;
	border: 5px solid var(--background);
`;

export const IconsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	/* height: 40px;
	width: 40px; */
	gap: 15px;
`;

export const ButtonCV = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #009b48;
	font-weight: 600;
	border-radius: 7px;
	padding: 5px;
	margin-top: 20px;
	/* #66d499; */
`;

export const H4 = styled.h4`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #dcd3d3e6;
`;

export const AboutMe = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	gap: 30px;
	background-color: var(--secondbg);
	/* background-color: #221f1f96; */
	padding: 50px 50px;
	border-radius: 10px;
	margin-top: 150px;
`;

export const Parraf = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #dcd3d3e6;
`;

export const Habs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 40px;
	margin-top: 150px;
	background-color: var(--secondbg);
	width: 100%;
	border-radius: 10px;
	padding: 50px;
`;

export const ContIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	padding: 10px;
`;

const Home = () => {
	return (
		<>
			<Hero>
				<ContTitle>
					{/* <Name>Marco</Name> */}
					<Name style={{ textWrap: "balance" }}>Fernandez Corvalán Marco</Name>
					<H4>Full Stack Developer</H4>
					<IconsCont>
						<FaGithub style={{ color: "#00ff2fc7", fontSize: "25px", cursor: "pointer" }} />
						<FaLinkedin style={{ color: "#375bc9", fontSize: "25px", cursor: "pointer" }} />
					</IconsCont>
				</ContTitle>
				<ImgCont>
					<Img src={imgPerfil} alt="Imagen de perfil" />
				</ImgCont>
			</Hero>
			<AboutMe>
				<Name>About Me</Name>
				<Parraf style={{ textWrap: "balance" }}>
					Emocionado por conocer el mundo laboral, respetuoso, atento a los detalles, responsable con los objetivos a
					cumplir y poseo buena capacidad para trabajar en equipo. Tengo 23 años, sé que tengo las capacidades
					necesarias para cumplir en todos los ámbitos donde sea necesario. Hice mis estudios en Nucba, donde me
					convertí en programador web full stack.
				</Parraf>
			</AboutMe>
			<Habs>
				<Name>Skills</Name>
				<ContIcons>
					<SiHtml5 style={{ color: "orange", fontSize: "40px" }} />
					<FaCss3Alt style={{ color: "lightblue", fontSize: "45px" }} />
					<RiJavascriptFill style={{ color: "yellow", fontSize: "50px" }} />
					<BiLogoTypescript style={{ color: "#3636b6d1", fontSize: "50px" }} />
					<IoLogoReact style={{ color: "#1a1affda", fontSize: "50px" }} />
					<SiRedux style={{ color: "violet", fontSize: "45px" }} />
					<FaNodeJs style={{ color: "lightgreen", fontSize: "45px" }} />
					<SiExpress style={{ color: "#d2d2ff", fontSize: "45px" }} />
					<SiMongodb style={{ color: "green", fontSize: "45px" }} />
				</ContIcons>
			</Habs>
		</>
	);
};

export default Home;
