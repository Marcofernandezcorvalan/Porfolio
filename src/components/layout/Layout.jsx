import React from "react";
import styled from "styled-components";

export const LayoutStd = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: center; */
	height: calc(100vh - 120px);
	margin: 0 auto;
	& p {
		text-align: center;
	}
	max-width: 1300px;
`;

export const ContentCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Layout = () => {
	return (
		<>
			<LayoutStd>
				<ContentCont>
					<h1>hola</h1>
				</ContentCont>
			</LayoutStd>
		</>
	);
};

export default Layout;
