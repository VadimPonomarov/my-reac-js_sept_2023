import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    body: yup.string().required(),
});

export {schema};