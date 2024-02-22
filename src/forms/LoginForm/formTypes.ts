import {
    BaseTextFieldProps,
} from "@mui/material/TextField/TextField";

import {formFields} from "./formFields";
import { formSchema } from "./formSchema";

export interface IFormFields<T> {
    [key: string]: {
        props?: { [key in keyof T]?: string };
    };
}

type IFormSchema<T> = {
    [key in keyof typeof formFields]: T
}

export interface IProps {
    props:{
        formLabel?: string;
        animate?: boolean;
    }
}

export type formInputType = typeof formSchema

export type FormTextFieldProps = BaseTextFieldProps

