import React, {ReactNode} from "react";

export interface IAuthContext {
    isAuth: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IProps {
    children?: ReactNode
}
