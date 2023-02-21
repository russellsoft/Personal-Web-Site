import {
	Logo,
	NavigationContainer,
	Description,
	GitHubLink
} from "./navigation.styles"

const Navigation = () => {
	return (
		<NavigationContainer>
			<Logo to="/">
				Ruslan Makiev
			</Logo>
			<Description>
				Я увлекаюсь программированием и работаю над разными проектами<br />
				Мои проекты можете посмотреть на странице Github
				Ссылка: <GitHubLink to="https://github.com/russellsoft?tab=repositories">Github russellsoft</GitHubLink><br />

				Ссылки на большие проекты оставлю ниже
			</Description>
		</NavigationContainer>
	)
}

export default Navigation