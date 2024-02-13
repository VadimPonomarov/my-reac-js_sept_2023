import React, {useEffect, useState} from "react";

import {useLocation, useNavigate} from "react-router-dom";
import {v4} from "uuid";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {coreService} from "../../services";

const PostsPage = () => {
    const [posts, setPosts] = useState();
    const {state: {postId}} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (postId) {
            coreService.getById("comments", postId)
                .then(posts => setPosts(posts));
        } else {
            coreService.getAll("posts")
                .then(posts => setPosts(posts));
        }

    }, [postId]);
    return (
        <div className={css.container}>
            {postId &&
                <div style={{width: "100%"}}>
                    <h2>PostID {postId}</h2>
                    <button className={"btn button"} onClick={() => navigate(-1)}><h2>👈</h2>step back</button>
                </div>
            }
            {posts && posts.map(item => <ItemCard key={v4()} props={item}/>)}
        </div>
    );
};

export default PostsPage;