import React, {useState} from "react";

import {v4} from "uuid";

import css from "./index.module.scss";


const ItemCard = ({props}) => {
    const {name, username, email,} = props;
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className={["container"].join(" ")}>
            <div className="accordion" id="accordion">
                <div className={["accordion-item", css]}>
                    <h2 className="accordion-header" id="accordion-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#accordion-collapseOne" aria-expanded="false"
                                aria-controls="accordion-collapseOne"
                                onClick={() => setCollapsed(!collapsed)}
                        >
                             <span
                                 className="position-absolute bottom-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {email} - {username}
                            </span>
                        </button>
                    </h2>

                    <div id={v4()}
                         className={["accordion-collapse", collapsed ? "collapse" : ""].join(" ")}
                         aria-labelledby="accordion-headingOne"
                         data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <div className="card">
                                <div className="card-header">
                                    {name}
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{username}</p>
                                        <footer className="blockquote-footer">
                                            <cite title="Source Title">
                                                {email}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className={"container"}>
                                {props.body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ItemCard};