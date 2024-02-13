import React, {useEffect, useState} from "react";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {coreService} from "../../services";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        coreService.getAll("comments")
            .then(comments => setComments(comments));
    }, []);
    return (
        <div className={css.container}>
            {comments && comments.map(item => <ItemCard props={item}/>)}
        </div>
    );
};

export default CommentsPage;