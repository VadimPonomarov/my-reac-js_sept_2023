import React, {useEffect, useState} from "react";

const ItemCard = ({props, current, setCurrent}) => {
    const {userId, id, title, body} = props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(current === id);
    }, [current]);

    const handleCurrent = () => {
        !current ? setCurrent(id) : setCurrent(undefined);
    };

    return (
        <div className="card" style={{width: "18rem", padding: "10px"}}>
            <div className="card-body">
                <h5 className="card-title">{id} - {title}</h5>
            </div>
            <div>
                <button className={"btn btn-primary btn-sm m-2"} onClick={handleCurrent}>
                    {current && "Return" || "Set current"}
                </button>
            </div>
            <div>
                {visible && JSON.stringify(props)}
            </div>
        </div>
    );
};

export {ItemCard};
