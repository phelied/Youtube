
import React from "react";
import './App.css';
import Navbar from "./components/Navbar/navbar";
import picture from "./img/kanye_1.jpg";

function App() {

	return (
		<div className="container">
			<div className="container__navbar-display">
				<Navbar />
			</div>
			<div className="container__main-display">
				<div className="container__img">
					<div className="container__img-size">
						<img className="img__picture" alt='Kanye west concert' src={picture} />
					</div>
				</div>
				<div className="container__proposing-song-display">
					<div className="container__popular-song-display">
					</div>
					<div className="container__other-song-display">
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
