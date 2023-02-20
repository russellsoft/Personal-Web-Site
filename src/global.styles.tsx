import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 20px 40px;
		font-family: 'Inter', sans-serif;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}
`

export default GlobalStyle