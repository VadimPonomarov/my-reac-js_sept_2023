import React, {useEffect, useState} from "react";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {coreService} from "../../services";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState();
    useEffect(() => {
        coreService.getAll("albums")
            .then(albums => setAlbums(albums));
    }, []);
    return (
        <div className={css.container}>
            {albums && albums.map(item => <ItemCard props={item}/>)}
        </div>
    );
};

export default AlbumsPage;