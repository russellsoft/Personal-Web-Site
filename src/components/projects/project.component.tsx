import { Link } from "react-router-dom"
import { ProjectsContainer, Project, ProjectsList, ProjectsText } from "./project.styles"
import img from "../../assets/crwn-clothing.png"

const Projects = () => {
	return (
		<ProjectsContainer>
			<ProjectsText>
				Проекты
			</ProjectsText>
			<ProjectsList>
				<Link to='https://resplendent-squirrel-f8f57f.netlify.app'><Project src={img} /></Link>
			</ProjectsList>
		</ProjectsContainer>
	)
}

export default Projects