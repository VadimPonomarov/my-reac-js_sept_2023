import React from "react";

import {AuthRequired} from "common/hocs/authRequired";
import {LoginPage, RegistrationPage, RickAndMortyCharactersPage} from "pages";
import {NotFound404} from "pages/NotFound_404";
import {RickAndMortyEpisodesPage} from "pages/RickAndMortyEpisodesPageContainer";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PrivateLayout, PublicLayout} from "./layouts";


const Router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <NotFound404/>,
        children: [
            {
                element: <AuthRequired><PrivateLayout/></AuthRequired>, children: [
                    {index: true, element: <RickAndMortyEpisodesPage/>},
                    {path: "/characters/:iDs", element: <RickAndMortyCharactersPage/>},
                ],

            },
            {
                element: <PublicLayout/>, children: [
                    {path: "/login", element: <LoginPage/>},
                    {path: "/registration", element: <RegistrationPage/>},
                ]
            }

        ],
    }])
;


export {Router};