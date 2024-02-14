import React from "react";

import {motion} from "framer-motion";

const ItemCard = ({props}) => {
    const {userId, id, title, completed} = props;

    return (
        <motion.div className="card" style={{width: "18rem"}}
                    transition={{delay: Math.random()}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
        >
            <div className="card-body">
                <h5 className="card-title">{userId} - {id}</h5>
                <p className="card-text">{title}</p>
                <p className="card-text">{completed}</p>
            </div>
        </motion.div>
    );
};

export {ItemCard};
