import React from "react";

export interface IToolBarProps {
    props: {
        auth: boolean
    }
}

export interface IMenuProps {
    props: {
        anchorEl: HTMLElement,
        setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>
    }
}

export interface IMenuItemProps {
    props: {
        caption: string,
        onClick: () => void
    }
}