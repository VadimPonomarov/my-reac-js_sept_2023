import * as yup from "yup";

const schema = yup.object({
    brand: yup.string().min(1).max(20).matches(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, "Please, enter 1-20 latin or cyrillic").required(),
    price: yup.number().integer().min(0).max(1000000).required(),
    year: yup.number().integer().min(1990).max(2023).required(),
});

export {schema};