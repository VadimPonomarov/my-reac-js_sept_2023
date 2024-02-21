import {Suspense} from "react";

import {MyAppBar} from "components/myAppBarContainer/MyAppBar";
import {Outlet} from "react-router-dom";

import css from "./mainLayout.module.scss";

const MainLayout = () => {
    return (
        <div className={css.mainLayout}>
            <MyAppBar/>
            <Suspense fallback={"<h1>Loading ...</h1>"}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export {MainLayout};