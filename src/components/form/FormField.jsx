import React from "react";

import {useFormContext} from "react-hook-form";

import css from "./index.module.scss";


const FormField = ({name, placeholder, label}) => {
    const {register, formState: {errors}} = useFormContext();
    const getSplitValue = (value) => {
        if (!value.toLowerCase().includes("email")) {
            return value.replaceAll("_", " ");
        }
        return "Email@gmail.com";
    };

    return (
        <div className={[css.field__container].join(" ")}>
            {label &&
                <label>{label}</label>
            }
            <input
                defaultValue={getSplitValue(placeholder)}
                {...register(name.replaceAll("_","."))}
            />
            <div className={[css.error_msg].join(" ")}>
                {errors[name] &&
                    errors[name].message}
            </div>

        </div>
    );
};

export {FormField};