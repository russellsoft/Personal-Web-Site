import Knowledge from "../../components/knowledge/knowledge.component"
import Projects from "../../components/projects/project.component"
import { HomeContainer } from "./home.styles"

const Home = () => {
	return (
		<HomeContainer>
			<Knowledge />
			<Projects />
		</HomeContainer>
	)
}

export default Home