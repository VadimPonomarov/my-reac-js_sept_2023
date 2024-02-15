import React from "react";

import {useNavigate} from "react-router-dom";

const ItemCard = ({props}) => {
    const {id, name} = props;
    const navigate = useNavigate();

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">{name}</p>
                <button
                    className={"btn button-outlined-primary"}
                    onClick={() => navigate("" + id)}
                >
                    Details...
                </button>
            </div>
        </div>
    );
};

export {ItemCard};
