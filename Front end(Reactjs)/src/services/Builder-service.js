//contain user related operation for calling server

import { myAxios } from "./helper";
//helps to call server

export const signup = (user) => {
    return myAxios.post('//api/v1/auth/register', user)
        .then((response) => response.data); //json data from server

};