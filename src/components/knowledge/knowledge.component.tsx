import { KnowledgeContainer, KnowledgeUL, KnowledgeText, KnowledgeLI, KnowledgeUlContainer } from "./knowledge.styles"

const Knowledge = () => {
	return (
		<KnowledgeContainer>
			<KnowledgeText>
				Что я знаю
			</KnowledgeText>
			<KnowledgeUlContainer>
				<KnowledgeUL><KnowledgeText>Языки программирования</KnowledgeText>
					<KnowledgeLI>JavaScript</KnowledgeLI>
					<KnowledgeLI>TypeScript</KnowledgeLI>
				</KnowledgeUL>
				<KnowledgeUL><KnowledgeText>Библиотеки</KnowledgeText>
					<KnowledgeLI>React</KnowledgeLI>
					<KnowledgeLI>Redux (Redux Saga, Redux Thunk)</KnowledgeLI>
				</KnowledgeUL>
			</KnowledgeUlContainer>
		</KnowledgeContainer>
	)
}

export default Knowledge