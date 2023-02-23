import styled from "styled-components";
import { Description } from "../../routes/navigation/navigation.styles";

export const ProjectsContainer = styled.div`
	display: grid;
	background-color: #F1F5FF;
	text-align: center;
	padding: 150px 0;
`

export const ProjectsText = styled(Description)`
	color: black;
	text-transform: uppercase;
	font-size: 32px;
`

export const ProjectsList = styled.div`
	display: grid;
	grid-template-columns: 50% 50%; 
`

export const Project = styled.img`
	border: 1px solid black;
	width: 500px;
	margin: 30px;
`