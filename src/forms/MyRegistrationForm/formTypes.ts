import {
    BaseTextFieldProps,
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    StandardTextFieldProps,
} from "@mui/material/TextField/TextField";

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

