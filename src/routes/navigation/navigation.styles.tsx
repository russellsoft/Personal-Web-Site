import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
	display: grid;
	background-color: #272727;
	text-transform: uppercase; 
	justify-content: space-between;
	padding: 300px;
	align-items: center;	
`

export const Logo = styled(Link)`
	cursor: pointer;
	margin-bottom: 100px;
	text-decoration: none;
	font-size: 40px; 
	color: white;
`

export const Description = styled.p`
	line-height: 30px; 
	color: white;
	justify-content: left;
`

export const GitHubLink = styled(Link)`
	cursor: pointer;
	color: white;
`