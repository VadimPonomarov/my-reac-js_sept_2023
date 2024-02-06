import React from "react";
import css from "./index.module.css";

const PostCard = ({props, isInfo, handleClick}) => {
    const {userId, id, title, body} = props;
    return (
        <div className={["card", css.card__mainDiv].join(" ")}>
            <div className="card-header">
                {id}
            </div>
            <div className={["card-body", css.divCard__body].join(" ")}>
                <h5 className="card-title">{title}</h5>
                {isInfo && body}
                <div>
                    <button
                        className="btn btn-sm btn-outline-primary m-2"
                        onClick={() => handleClick(props)}
                    >
                        {isInfo && "Return" || "Details..."}
                    </button>
                </div>
            </div>
        </div>
    );
};

export {PostCard};
