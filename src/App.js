
import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import ListArtists from "./components/listartists";
import ListSongs from "./components/listsongs";
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
						<div className="container__songs-text-display">
							<span className="span__popular-text-size" >Popular Songs</span>
							<span className="span__other-text-size">Show All</span>
						</div>
						<div className="container__list-songs-display">
							<ListSongs />
						</div>

					</div>
					<div className="container__other-artists-display">
						<div className="container__songs-text-display">
							<span className="span__popular-text-size">Other Artists</span>
							<span className="span__other-text-size">Show All</span>
						</div>
						<div className="container__list-songs-display">
							<ListArtists />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
