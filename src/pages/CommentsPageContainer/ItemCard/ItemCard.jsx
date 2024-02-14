import React from "react";

import {useNavigate} from "react-router-dom";

const ItemCard = ({props}) => {
    const {postId, id, name, email, body} = props;
    const navigate = useNavigate();
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{postId} - {id}</h5>
                <p className="card-text">{name} - {email}</p>
                <p className="card-text">{body}</p>
            </div>
            <button
                className={"btn btn-outline-primary"}
                onClick={() => navigate("/posts", {state: {postId}})}
            >
                Post #{postId} all comments ...
            </button>
        </div>
    );
};

export {ItemCard};
