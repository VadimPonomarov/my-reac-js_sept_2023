import React from "react";

import {useQuery} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";

import css from "./index.module.scss";
import {usersService} from "../../../services";

const Details = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data, isLoading, isSuccess} = useQuery({
        queryFn: () => usersService.getById(id),
        queryKey: ["userById"]
    });

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <div className={css.card__mainDiv}>
            <div style={{width: "100%"}}>
                <button className={"btn button"} onClick={() => navigate(-1)}>
                        <span>
                            <h2>👈</h2>
                            step back
                        </span>
                </button>
            </div>
            <div className="card" style={{width: "18rem"}}>
                {isSuccess &&
                    <div className="card-body">
                        <h5 className="card-title">{id} - {data.name}</h5>
                        {/*<p className="card-text">{name}</p>*/}
                        <p className="card-text">{data.username}</p>
                        <p className="card-text">{data.email}</p>
                        <p className="card-text">{JSON.stringify(data)}</p>
                        <button
                            className={"btn btn-primary"}
                            onClick={() => navigate("posts")}
                        >
                            Post of current user
                        </button>
                    </div>}
            </div>
        </div>
    );
};

export {Details};
