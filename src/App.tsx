import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header one={"2"} two={55} three={"haq"} />
			<Main />
			<Footer first={1} second={2} third={3} />
		</div>
	);
}

export default App;
