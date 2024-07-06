import React from "react";

import Skills from "../../components/layout/Skills/Skills";
import Hero from "../../components/layout/Hero/Hero";
import About from "../../components/layout/About/About";
import Proyects from "../../components/layout/Proyects/Proyects";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Proyects />
		</>
	);
};

export default Home;
