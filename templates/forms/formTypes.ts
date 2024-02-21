import {
    BaseTextFieldProps,
} from "@mui/material/TextField/TextField";

import {formFields} from "./formFields";

export interface IFormFields<T> {
    [key: string]: {
        props?: { [key in keyof T]?: string };
    };
}

type IFormSchema<T> = {
    [key in keyof typeof formFields]: T
}

export interface IProps {
    formLabel?: string;
    animate?: boolean;
}

export type FormTextFieldProps = BaseTextFieldProps

