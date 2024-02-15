import React, {useEffect, useState} from "react";

import {useQuery} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";

import css from "./index.module.scss";
import {ItemCard} from "./ItemCard/ItemCard";
import {coreService$, postsService, usersService} from "../../services";
import {ItemCard as CommentCard} from "../CommentsPageContainer/ItemCard/ItemCard";

const PostsPage = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState();
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    const {data: items, isLoading, isSuccess} = useQuery({
        queryFn: () => usersService.getPostsByUserId(id),
        queryKey: ["postsByUserId"]
    });

    useEffect(() => {
        const sub = coreService$.subscribe(setComments);
        if (current) {
            coreService$.next(() => postsService.getCommentsByPost(current));
        }
        return () => sub.unsubscribe();
    }, [current]);

    if (isLoading) return <h2>Loading...</h2>;

    const filteredItems = (current ? items.filter(item => item.id === current) : items);


    return (
        <div className={css.container}>
            {isSuccess &&
                <>
                    <div style={{width: "100%"}}>
                        {/*<h2>PostID {postId}</h2>*/}
                        <button className={"btn button"} onClick={() => navigate(-1)}>
                        <span>
                            <h2>👈</h2>
                            step back
                        </span>
                        </button>
                    </div>
                    {filteredItems.length &&
                        filteredItems.map(item =>
                            <ItemCard key={item.id} props={item} setCurrent={setCurrent} current={current}/>)
                    }
                    <div style={{width: "100%"}}>
                        <hr/>
                        Comments
                        <hr/>
                    </div>
                    <div className={"d-flex flex-wrap justify-content-center gap-2"}>
                        {(current && comments.length) && comments.map(item =>
                            <CommentCard props={item}/>)}
                    </div>
                </>
            }
        </div>
    );
};

export default PostsPage;