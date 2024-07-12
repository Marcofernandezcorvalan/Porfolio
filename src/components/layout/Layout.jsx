import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export const LayoutStd = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	/* height: calc(100vh - 120px); */
	margin: 0 auto;
	& p {
		text-align: center;
	}
	max-width: 1300px;
`;

export const ContentCont = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	padding: 20px;
	/* margin-top: 200px; */
`;

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<LayoutStd>
				<ContentCont>{children}</ContentCont>
			</LayoutStd>
		</>
	);
};

export default Layout;
