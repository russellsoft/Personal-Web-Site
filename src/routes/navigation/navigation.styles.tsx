import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
	display: flex;
	background-color: #272727;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: 600px;
`

export const NavigationContainer = styled.div`
	display: grid;
	width: 65%;
	text-transform: uppercase; 
`

export const Logo = styled(Link)`
	cursor: pointer;
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