import React, {useEffect, useState} from "react";

import css from "./index.module.scss";

const UserCard = ({props}) => {
    const {
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: company, catchPhrase, bs},
    } = props;

    return (
        <div className={["container"].join(" ")}>
            <div className="accordion" id="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="accordion-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#accordion-collapseOne" aria-expanded="false"
                                aria-controls="accordion-collapseOne">
                             <span
                                 className="position-absolute bottom-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {email} - {username}
                            </span>
                        </button>
                    </h2>

                    <div id="accordion-collapseOne" className="accordion-collapse collapse" aria-labelledby="accordion-headingOne"
                         data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <div className="card">
                                <div className="card-header">
                                    {name}
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{username}</p>
                                        <footer className="blockquote-footer">Someone famous in <cite
                                            title="Source Title">{email}</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <pre>{JSON.stringify(props)}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {UserCard};