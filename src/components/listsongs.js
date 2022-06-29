import React, { useState } from "react";
import '../styles/listsongs.css';
import mocks from "../mocks/list-songs-mocks.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const ListSongs = () => {

    return (
        <>
            <div className="container__list-songs-block">
                {mocks.slice(0, 4).map((data) => (
                    <div key={data.id} className="container__specific-songs-block">
                        <div className="container__specific-songs-justify">
                            <span className="span__id-song-size">{data.id}</span>
                            <img alt="album cover" src={data.pictureAlbum} />
                            <span className="span__title-song-size">{data.title}</span>

                        </div>
                        <span className="span__album-song-size">{data.album} </span>
                        <div className="container__specific-songs-justify">
                            <span className="span__like-song-size">d</span>
                            <span className="span__duration-song-size">{data.duration}</span>
                            <span className="span__more-song-size"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default ListSongs;