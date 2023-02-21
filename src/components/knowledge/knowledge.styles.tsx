import styled from 'styled-components'
import { Description } from '../../routes/navigation/navigation.styles'

export const KnowledgeContainer = styled.div`
	display: flex;
	justify-content: space-around;
	text-transform: uppercase;
`

export const KnowledgeText = styled(Description)`
	color: black;
	font-size: 32px;
`

export const KnowledgeUlContainer = styled.div``


export const KnowledgeUL = styled.ul`
	text-align: center;
`

export const KnowledgeLI = styled.li`
	display: flex;
	text-transform: none;
	line-height: 40px;
	justify-content: center;
	font-size: 20px;
`