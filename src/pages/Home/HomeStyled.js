import styled from "styled-components";

export const ContainerP = styled.main`
	display: flex;
	justify-content: center;
	gap: 20px;
`;

export const HeroCont = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	/* flex-direction: column; */
	width: 55%;
	/* gap: 30px; */
	background-color: var(--background);
	/* background-color: #221f1f96; */
	padding: 10px;
	border-radius: 10px;
	/* margin-top: 200px; */
	/* margin-bottom: 100px; */
	height: 350px;
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
	/* color: #90ee90cb; */
	color: whitesmoke;
	width: 80%;
	text-align: center;
`;

export const ImgCont = styled.div`
	display: flex;
	width: 45%;
	justify-content: center;
`;

export const Img = styled.img`
	border-radius: 50px;
	filter: drop-shadow(5px -10px 20px rgba(200, 127, 38, 0.3));
	width: 80%;
	/* border: 5px solid var(--background); */
	opacity: 0.85;
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
	width: 45%;
	gap: 30px;
	background-color: var(--background);
	padding: 30px;
	border-radius: 10px;
	/* margin-top: 150px; */
`;

export const Parraf = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #dcd3d3e6;
`;

export const Habs = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	height: 150px;
	/* margin-top: 150px; */
	background-color: var(--background);
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
