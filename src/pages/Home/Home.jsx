import React from "react";
import { ContainerP } from "./HomeStyled";
import Skills from "../../components/Skills/Skills";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

const Home = () => {
	return (
		<>
			<ContainerP>
				<Hero />
				<About />
			</ContainerP>
			<Skills />
			<Projects />
		</>
	);
};

export default Home;
