import { Suspense } from "react";

import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component'
import GlobalStyle from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

export const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<GlobalStyle />
				<Navigation />
				<Home />
		</Suspense>
	);
}

export default App;
