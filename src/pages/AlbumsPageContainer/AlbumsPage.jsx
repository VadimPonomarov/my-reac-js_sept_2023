import React, {useEffect, useState} from "react";

import {v4} from "uuid";

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
            {albums && albums.map(item => <ItemCard key={v4()} props={item}/>)}
        </div>
    );
};

export default AlbumsPage;