import { Link } from "react-router-dom"
import { ProjectsContainer, Project, ProjectsList, ProjectsText } from "./project.styles"
import img1 from "../../assets/crwn-clothing.png"
import img2 from "../../assets/rickandmorty.png"

const Projects = () => {
	return (
		<ProjectsContainer>
			<ProjectsText>
				Проекты
			</ProjectsText>
			<ProjectsList>
				<Link to='https://resplendent-squirrel-f8f57f.netlify.app'><Project src={img1} /></Link>
				<Link to='https://github.com/russellsoft/RickAndMorty'><Project src={img2} /></Link>
			</ProjectsList>
		</ProjectsContainer>
	)
}

export default Projects