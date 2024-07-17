import React from "react";
import imgPerfil from "../../assets/img/foto.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ContTitle, H4, HeroCont, IconsCont, Img, ImgCont, Name } from "../../pages/Home/HomeStyled";

const Hero = () => {
	return (
		<HeroCont>
			<ContTitle>
				<Name style={{ textWrap: "balance" }}>Fernandez Corvalán Marco</Name>
				<H4>Full Stack Developer</H4>
				<IconsCont>
					<a href="https://github.com/Marcofernandezcorvalan">
						<FaGithub style={{ color: "#00ff2fc7", fontSize: "25px", cursor: "pointer" }} />
					</a>
					<a href="https://www.linkedin.com/in/marco-fer-corv/">
						<FaLinkedin style={{ color: "#375bc9", fontSize: "25px", cursor: "pointer" }} />
					</a>
				</IconsCont>
			</ContTitle>
			<ImgCont>
				<Img src={imgPerfil} alt="Imagen de perfil" />
			</ImgCont>
		</HeroCont>
	);
};

export default Hero;
