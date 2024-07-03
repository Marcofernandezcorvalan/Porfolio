import React from "react";
import { AboutMe, Name, Parraf } from "../../../pages/Home/HomeStyled";

const About = () => {
	return (
		<AboutMe>
			<Name>About Me</Name>
			<Parraf style={{ textWrap: "balance" }}>
				Emocionado por conocer el mundo laboral, respetuoso, atento a los detalles, responsable con los objetivos a
				cumplir y poseo buena capacidad para trabajar en equipo. Tengo 23 años, sé que tengo las capacidades necesarias
				para cumplir en todos los ámbitos donde sea necesario. Hice mis estudios en Nucba, donde me convertí en
				programador web full stack.
			</Parraf>
		</AboutMe>
	);
};

export default About;
