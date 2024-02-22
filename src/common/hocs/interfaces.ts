import React, {ReactNode} from "react";

export interface IAuthContext {
    isAuth: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
    theme?: "light" | "dark"
}

export interface IProps {
    children?: ReactNode
}
