
import React from "react";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import picture from "./img/kanye_1.jpg";

function App() {
	return (
		<div className="container">
			<Navbar />
			<div className="container__img">
				<div className="container__img-size">
					<img className="img__picture" alt='Kanye west picture' src={picture}/>
					<div className="container__information-text">
						<span className="span__artist-text">Artist</span>
						<span className="span__artistname-text">Kanye West</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
