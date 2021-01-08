import "./App.css";
import { Switch, Route } from "react-router-dom";

import Index from "./pages/Index";
import Pokemon from "./pages/Pokemon";

function App() {
	return (
		<div>
			<h1 className="title">Pokedex</h1>
			<Switch>
				<Route path="/pokemon/:name">
					<Pokemon />
				</Route>
				<Route path="/">
					<Index />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
