import React from "react";

const ItemCard = ({props}) => {
    const {userId, id, title, completed} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{userId} - {id}</h5>
                <p className="card-text">{title}</p>
                <p className="card-text">{completed}</p>
            </div>
        </div>
    );
};

export {ItemCard};
