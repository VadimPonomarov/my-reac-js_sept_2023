import React, {useEffect, useState} from "react";
import {axiosPostService} from "../services";
import {PostCard} from "../components";
import css from "./index.module.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [current, setCurrent] = useState("");
    useEffect(() => {
        axiosPostService.getPosts()
            .then(data => setPosts(data));
    }, []);

    const handleCurrent = (item) => {
        if (current) {
            setCurrent(undefined);
        } else {
            setCurrent(item);
        }
    };
    return (
        <>
            {current &&
                (<div className={css.info__div}>
                        <PostCard props={current} isInfo={true} handleClick={handleCurrent}/>
                    </div> ||
                    <div className={["container-flex", css.divContainer].join(" ")}>
                        {posts &&
                            posts.map(
                                item => <PostCard key={item.id} props={item} handleClick={handleCurrent}/>
                            )
                        }
                    </div>)
            }

        </>
    );
};

export {Posts};