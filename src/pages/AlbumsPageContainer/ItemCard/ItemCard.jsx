import React from "react";

const ItemCard = ({props}) => {
    const {userId, id, title} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{userId} - {id}</h5>
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
};

export {ItemCard};
