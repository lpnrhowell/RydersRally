import "./App.css";
import * as Realm from "realm-web";
import Search from "./components/Search";
import Events from "./components/Events"
import Restaurant from "./components/SearchResults";



function App() {
	
	
	return (
		<div className="App">
			<Search />
			<Events />
			<Restaurant  />
		</div>
	);
}

export default App;
