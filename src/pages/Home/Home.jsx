import React from "react";
import styled from "styled-components";
import imgPerfil from "../../assets/img/foto_de_perfil (2).png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
		</>
	);
};

export default Home;
