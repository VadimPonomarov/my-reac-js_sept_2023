import React from "react";

import {useFormContext} from "react-hook-form";

import css from "./index.module.scss";


const FormField = ({name, placeholder, label}) => {
    const {register, formState: {errors}} = useFormContext();

    return (
        <div className={[css.field__container].join(" ")}>
            {label &&
                <label>{label}</label>
            }
            <input
                defaultValue={placeholder}
                disabled={name === "id"}
                {...register(name)}
            />
            <div className={[css.error_msg].join(" ")}>
                {errors[name] &&
                    errors[name].message}
            </div>

        </div>
    );
};

export {FormField};