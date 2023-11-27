//get data by role

import axoissecure from "../../Hook/Axoissecure"


export const getPaymnet = async email => {

    console.log('email ---->',email)
    const{data} = await axoissecure.get(`/payment/email/${email}`)
   return data
}