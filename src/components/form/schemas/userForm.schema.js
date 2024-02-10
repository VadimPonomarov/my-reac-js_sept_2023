import * as yup from "yup";

const schema = yup
    .object({
        name: yup.string().required(),
        username: yup.string().required(),
        email: yup.string().email().required(),
        address_street: yup.string().required("kgghjgh"),
        address_suite: yup.string().required(),
        address_city: yup.string().required(),
        address_zipcode: yup.string().required(),
        address_geo_lat: yup.string().required(),
        address_geo_lng: yup.string().required(),
        phone: yup.string().required(),
        website: yup.string().required(),
        company_name: yup.string().required(),
        company_catchPhrase: yup.string().required(),
        company_bs: yup.string().required()
    })
    .required();

export {schema};