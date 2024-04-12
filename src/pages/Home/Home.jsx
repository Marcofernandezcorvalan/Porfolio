import React from "react";
import styled from "styled-components";
import imgPerfil from "../../assets/img/foto_de_perfil (2).png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const Hero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	/* gap: 30px; */
	background-color: var(--secondbg);
	/* background-color: #221f1f96; */
	padding: 25px 0px;
	border-radius: 10px;
`;

export const ContTitle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 50%;
`;

export const Name = styled.h2`
	font-size: 25px;
	color: #dcd3d3;
	width: 60%;
	text-align: center;
	text-wrap: balance;
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

const Home = () => {
	return (
		<>
			<Hero>
				<ContTitle>
					{/* <Name>Marco</Name> */}
					<Name> Marco Fernandez Corvalán</Name>
					<IconsCont>
						<FaGithub
							style={{ fontSize: "25px", cursor: "pointer" }}
							onMouseOver={({ target }) => (target.style.color = "lightgreen")}
							onMouseOut={({ target }) => (target.style.color = "white")}
						/>
						<FaLinkedin
							style={{ fontSize: "25px", cursor: "pointer" }}
							onMouseOver={({ target }) => (target.style.color = "lightblue")}
							onMouseOut={({ target }) => (target.style.color = "white")}
						/>
					</IconsCont>
				</ContTitle>
				<ImgCont>
					<Img src={imgPerfil} alt="Imagen de perfil" />
				</ImgCont>
			</Hero>
		</>
	);
};

export default Home;
