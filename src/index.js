import React from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";

import "./index.scss";

import {router} from "./router";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
);
