import React, {useEffect, useState} from "react";

import {useLocation, useNavigate} from "react-router-dom";
import {v4} from "uuid";

import {ItemCard} from "./index";
import css from "./index.module.scss";
import {coreService$, postsService} from "../../services";

const PostsPage = () => {
    const {state: {postId}} = useLocation();
    const navigate = useNavigate();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const sub = coreService$.subscribe(setItems);
        coreService$.next(() => postsService.getCommentsByPostId(postId));
        return () => sub.unsubscribe();
    }, [postId]);

    return (
        <div className={css.container}>
            {postId &&
                <div style={{width: "100%"}}>
                    <h2>PostID {postId}</h2>
                    <button className={"btn button"} onClick={() => navigate(-1)}>
                        <span>
                            <h2>👈</h2>
                            step back
                        </span>
                    </button>
                </div>
            }
            {items.length && items.map(item => <ItemCard key={v4()} props={item}/>)}
        </div>
    );
};

export default PostsPage;