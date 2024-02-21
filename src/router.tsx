import React from "react";

import {AuthRequired} from "common/hocs/authRequired";
import {LoginPage, RegistrationPage} from "pages";
import {NotFound404} from "pages/NotFound_404";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PrivateLayout, PublicLayout} from "./layouts";


const Router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <NotFound404/>,
        children: [
            {
                element: <AuthRequired><PrivateLayout/></AuthRequired>, children: [
                    {index: true, element: <RegistrationPage/>},
                    {path: "/home", element: <Navigate to={"/"}/>},
                ],

            },
            {
                element: <PublicLayout/>, children: [
                    {path: "/login", element: <LoginPage/>},
                ]
            }

        ],
    }])
;


export {Router};