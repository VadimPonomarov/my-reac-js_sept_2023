import {
    BaseTextFieldProps,
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
} from "@mui/material/TextField/TextField";

import { formSchema } from "./formSchema";

export interface IProps {
    props?: {
        formLabel?: string;
        animate?: boolean;
    }
}

export interface IFormFields<T> {
    [key: string]: {
        props?: { [key in keyof T]?: string };
    };
}

export type FormTextFieldProps =
    BaseTextFieldProps
    | StandardTextFieldProps
    | FilledTextFieldProps
    | OutlinedTextFieldProps

export type formInputType = typeof formSchema

