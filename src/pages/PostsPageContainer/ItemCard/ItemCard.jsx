import React from "react";

const ItemCard = ({props}) => {
    const {userId, id, name, email, body} = props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{userId} - {id}</h5>
                <p className="card-text">{name} - {email}</p>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
};

export {ItemCard};
