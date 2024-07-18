import styled from "styled-components";

export const ProyectCont = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* margin-top: 150px; */
	background-color: var(--background);
	width: 100%;
	border-radius: 10px;
	padding: 40px;
	gap: 50px;
`;

export const ContProyectItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
`;

export const ProyectItem = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	width: 400px;
	height: 350px;
	background-color: var(--secondbg);
	border-radius: 10px;
	padding: 20px 10px;
	gap: 7px;
`;

export const ProyectItemImg = styled.img`
	width: 100%;
	border-radius: 10px;
`;

export const ProyectItemTitle = styled.h3`
	color: wheat;
	font-size: 22px;
`;

export const ProyectItemSkillsCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	gap: 5px;
`;
