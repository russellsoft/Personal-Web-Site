import { Header } from "../../routes/navigation/navigation.styles";
import styled from "styled-components";
import { ProjectsText } from "../projects/project.styles";
import { Link } from "react-router-dom";

export const FooterContainer = styled(Header)`
	display: flex;
	color: white;
	justify-content: space-around;

	@media (max-width: 921px) {
		display: grid;
		height: 1000px;
	}
`

export const SVG = styled.img``

export const FooterText = styled(ProjectsText)`
	color: white;
`

export const ContactMe = styled.div`
	display: grid;
`

export const AddressContainer = styled.div`
	display: grid;
	text-transform: none;
	font-size: 20px;
	gap: 30px;
	line-height: 40px;
`

export const MapContainer = styled.iframe`
	width: 500px;
	height: 240px;
	border: 0;

	@media (max-width: 541px) {
		width: 261px;
		height: 120px;
	}
`

export const GithubSVG = styled(SVG)`
	background-color: white;
	border-radius: 50%;
`

export const ContactMeElement = styled.div`
	display: flex;
	margin-bottom: 20px;
	gap: 30px;
	align-items: center;
`

export const Linking = styled(Link)`
	text-decoration: none;
	color: white;
`