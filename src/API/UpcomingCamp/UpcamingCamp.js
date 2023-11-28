


import axoissecure from "../../Hook/Axoissecure"

// pos upcaming campppppp



export const addUcamingCamp = async (campInfo) => {

    console.log("email from 51 line",campInfo)
    const{data} = await axoissecure.post('/add-upcaming-camp',campInfo)
    return data

}