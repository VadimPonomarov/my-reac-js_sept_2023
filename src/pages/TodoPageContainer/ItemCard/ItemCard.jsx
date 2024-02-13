import React from "react";

import {motion} from "framer-motion";

const ItemCard = ({props}) => {
    const {userId, id, title, completed, custom} = props;
    const motionVariants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.5,
            }

        }),
        hidden: {
            opacity: 0
        }
    };
    return (
        <motion.div className="card" style={{width: "18rem"}} variants={motionVariants} initial={"hidden"}
                    animate={"visible"} custom={custom}>
            <div className="card-body">
                <h5 className="card-title">{userId} - {id}</h5>
                <p className="card-text">{title}</p>
                <p className="card-text">{completed}</p>
            </div>
        </motion.div>
    );
};

export {ItemCard};
