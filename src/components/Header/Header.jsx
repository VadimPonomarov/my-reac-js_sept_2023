import React from "react";

import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-center">
                <NavLink to={"/users"} className="navbar-brand">Users</NavLink>,
                {/*<NavLink to={""} className="navbar-brand">Todos</NavLink>*/}
                {/*<NavLink to={"/albums"} className="navbar-brand">Albums</NavLink>*/}
                {/*<NavLink to={"/comments"} className="navbar-brand">Comments</NavLink>,*/}
            </div>
        </nav>
    );
};

export {Header};