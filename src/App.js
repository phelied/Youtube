
import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import ListArtists from "./components/listartists";
import ListSongs from "./components/listsongs";
import picture from "./img/kanye_1.jpg";
import profile from "./img/profile.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {

	return (
		<div className="container">
			<nav className="container__navbar-display">
				<div className="container__arrow-size">
					<FontAwesomeIcon icon={faArrowLeft} />
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
				<div className="container__search-bar-main-margin">
					<div className="container__search-bar-main-text">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACwUlEQVRIie2Vv28URxTHP2/YcQpXV8BJAUUIUfiOuIH8AZgfSclxlsZyiwtEE0tIiCjVVghkIQqqE7i+25VibKpIxFHSgQQNMjo3gIiiEDmlG4PNflN4L3LQ6W7XYCq+zbzZee99djTz5sFnfSLZMIc0TUckNYAGcBw4lC/9KemJmS2Z2WII4e1HA3c6nSYwZ2ZHhuR5bmZXQgj3Pggcx7EbGxu7bmZXAMzsqaR5M/tlY2PjFUAURYejKDojaQYYz0NvdLvdH+M4zoaBo34fd0DfSJrtdrt3+iR7BjyL4/h2vV6/KOkWcLVWqwH8UHrHnU6naWY/AW/M7LsQwu/DkgC02+2TzrmfgS+A81NTU4uD/N3OSZqmI8AcgKTZolCA6enp3yRdzqdzrVbLFwZLapjZETN7urq6eqco9L9kzrWAFeBopVI5VxgMnAfIsuxukQvyvkII7yTNw/YmyoCPAzjnlstCe8qy7EFuflMG/GU+/rFb8OjoaC/2YBnwB2t9fX3oa9gP/Fc+frVbcBRFvdi/C4MlPc7Ns7sFO+e+zc2HhcFmtpT/wEwcx6WPIU3TfVmWXchz3C8DXgSeA+P1ev1iWTBwycyOSXpRrVYHNoz/gUMIb3uNQdKtdrt9sigxSZIJSTfz6ezExMTWIP++NzBJkuvAVbabxGXnXCuE8K6fb5qm+4BLOXQEWPPejzebzbXS4DiOXa1Wu5bDAVYkzWdZ9iCKolcAWZYdNrOzkmbM7FjutwYcAFa896cHwQfWXJIkDbabxtFBfsBLSd875x5J+hX4ehh8aLG3Wi1fqVTOSWpIOmFmh/K418BDSfer1eq93pkuLCwc2NzcXB4GL/TKlFWapvslLQPjkla996cmJydf7zm4CPyjv9U9hRD+8d6fAVbMbGxra2tp5/qegQGazeaa9/408AToW46ftef6FxySIClkh//OAAAAAElFTkSuQmCC" alt='search-logo' />
						<span>Search for artists, songs or playlists</span>
					</div>
				</div>
				<img src={profile} alt='my-profile-account' />
			</nav>
			<div className="container__navbar-side-display">
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
					<div className="container__cover-display">
						<img alt='cover' src='images/purple.webp' />
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
