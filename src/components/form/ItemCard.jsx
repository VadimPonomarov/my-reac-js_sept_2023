import React from "react";

import css from "./index.module.scss";

const ItemCard = ({props, isInfo, handleClick}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = props;
    return (
        <div
            className={["card", css.card__mainDiv].join(" ")}
            style={{backgroundImage: `url(${mission_patch_small})`}}
        >
            <div className="card-header">
                <span className="badge bg-secondary">{mission_name}</span>
            </div>
            <div className={["card-body", css.divCard__body].join(" ")}>
                <h5 className="card-title">{launch_year}</h5>
                {isInfo && "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, fugiat."}
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

export {ItemCard};
