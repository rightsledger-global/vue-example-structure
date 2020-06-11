import axios from "axios"
import VueCookies from 'vue-cookies'
import api from './url'

const service = {}

service.logout = function (){
    VueCookies.remove("user");
    location.reload();
};

service.headers = function (){
    let user = VueCookies.get("user");
    if(user){
        let header = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer '+user.token
            }
        }
        return header;
    }else{ service.logout() }
};

service.headerWithoutToken = function (){
    let header = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return header;
}

service.validateError = function (data) {
    if(data.data && data.data.status === 401){
        service.logout();
    }
    return data.data;
};

service.authentication = async function (body) {
    return await axios.post(api.authentication, 
        body, 
        service.headerWithoutToken())
    .then((response) => {
        return service.validateError(response);
    }).catch(function (error) {
        return error.response.data;
    })
};

service.getNewwfeed = async function (body) {
    return await axios.post(api.authentication, 
        body, 
        service.headers())
    .then((response) => {
        return service.validateError(response);
    }).catch(function (error) {
        return error.response.data;
    })
};

export default service;