import React, { useState } from "react";
import '../styles/listartists.css';
import mocks from "../mocks/list-songs-mocks.json"

const ListArtists = () => {

    return (
        <>
            <div className="container__list-artist-block">
                {mocks.slice(0, 4).map((data) => (
                    <div className="container__specific-artist-block">
                        <img alt='artist cover' src="" />
                        <div className="container__specific-songs-justify">
                            <span className="span__id-song-size">{data.artist}</span>
                            <span className="span__title-song-size">{data.number}</span>
                        </div>
                        <span className="span__title-song-size">{data.title}</span>
                    </div>
                ))}

            </div>
        </>
    )
}

export default ListArtists;