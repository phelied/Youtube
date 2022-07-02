import React from "react";
import '../styles/listartists.css';
import mocks from "../mocks/list-songs-mocks.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const ListArtists = () => {

    return (
        <>
            <div className="container__list-artist-block">
                {mocks.map((data) => (
                    <div key={data.id} className="container__specific-artist-block">
                        <img alt='artist cover' src={data.pictureArtist} />
                        <div className="container__album-in-songs-justify">
                            <p className="span__artist-song-size">{data.artist}</p>
                            <p className="span__title-song-size">{data.number} songs</p>
                        </div>
                        <span className="span__more-song-size"><FontAwesomeIcon icon={faEllipsis} /></span>
                    </div>
                ))}

            </div>
        </>
    )
}

export default ListArtists;