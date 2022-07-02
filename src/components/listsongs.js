import React from "react";
import '../styles/listsongs.css';
import mocks from "../mocks/list-songs-mocks.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faHeart } from '@fortawesome/free-solid-svg-icons'

const ListSongs = () => {

    return (
        <>
            <div className="container__list-songs-block">
                {mocks.slice(0, 4).map((data) => (
                    <div key={data.id} className="container__specific-songs-block">
                        <div className="container__specific-songs-justify">
                            <span className="span__id-song-size">{data.id + 1}</span>
                            <img alt="album cover" src={data.pictureAlbum} />
                            <span className="span__title-song-size">{data.title}</span>

                        </div>
                        <span className="span__album-song-size">{data.artist} </span>
                        <div className="container__specific-songs-justify">
                            <span className="span__like-song-size"><FontAwesomeIcon icon={faHeart} /></span>
                            <span className="span__duration-song-size">{data.duration}</span>
                            <span className="span__more-song-size"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default ListSongs;