import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from './routes/home/home.component'
import GlobalStyle from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

export const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route path="home" element={<Home />}/>
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
