const baseUrl = process.env.VUE_APP_BASE_URL;
const v1 = "/api/v1"
const api = {
    //customer
    customer: baseUrl+v1+'/customer',
    getAllCustomer: baseUrl+v1+'/customer/all',

    //driver
    driver: baseUrl+v1+'/driver',
    getAllDriver: baseUrl+v1+'/driver/all',

    //transaction
    transaction: baseUrl+v1+'/transaction',
    getAllTransaction: baseUrl+v1+'/transaction/all',

    //jwt-authencation
    authentication: baseUrl+'/authenticate',
    changePassword: baseUrl+'/change-password',
    checkUserDuplicate: baseUrl+'/check-user-duplicate',
    refreshToken: baseUrl+'/refresh-token',
    register: baseUrl+'/register',

    //storage
    loadImage: baseUrl+'/resources/images',
    uploadImage: baseUrl+'/upload-image-'

};
export default api;