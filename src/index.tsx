import React from "react";

import {ThemeProvider} from "@mui/material";
import {AuthContextProvider} from "common/hocs/authContextProvider";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";

import {myThemeMain} from "./common/themes";
import {Router} from "./router";

import "./index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={myThemeMain}>
            <AuthContextProvider>
                <RouterProvider router={Router}/>
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
);
