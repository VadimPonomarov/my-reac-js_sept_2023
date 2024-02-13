import React, {useEffect, useState} from "react";

import {useLocation, useNavigate} from "react-router-dom";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {coreService} from "../../services";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
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
        <>
            <div>
                {postId &&
                    <div className={"m-2"}>
                        <h2>PostID {postId}</h2>
                        <button className={"btn button"} onClick={() => navigate(-1)}><h2>👈</h2>step back</button>
                    </div>
                }
            </div>
            <div className={css.container}>
                {posts && posts.map(item => <ItemCard props={item}/>)}
            </div>
        </>
    );
};

export default PostsPage;