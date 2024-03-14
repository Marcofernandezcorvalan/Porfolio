import React from "react";
import styled from "styled-components";
import imgPerfil from "../../assets/img/foto_de_perfil (2).png";

export const Hero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	/* gap: 30px; */
	background-color: var(--secondbg);
	padding: 40px 0px;
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
	font-size: 20px;
	color: #fb632b;
`;

export const ImgCont = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
`;

export const Img = styled.img`
	border-radius: 100px;
	width: 45%;
	border: 5px solid var(--background);
`;

const Home = () => {
	return (
		<>
			<Hero>
				<ContTitle>
					<Name>Marco</Name>
					<Name>Fernandez Corvalán</Name>
				</ContTitle>
				<ImgCont>
					<Img src={imgPerfil} alt="Imagen de perfil" />
				</ImgCont>
			</Hero>
		</>
	);
};

export default Home;
