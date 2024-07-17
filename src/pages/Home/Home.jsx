import React from "react";
import { ContainerP } from "./HomeStyled";
import Skills from "../../components/Skills/Skills";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Proyects from "../../components/Proyects/Proyects";

const Home = () => {
	return (
		<>
			<ContainerP>
				<Hero />
				<About />
			</ContainerP>
			<Skills />
			<Proyects />
		</>
	);
};

export default Home;
