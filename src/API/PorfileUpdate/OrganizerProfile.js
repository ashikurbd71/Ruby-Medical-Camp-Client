// import axoissecure from "../../Hook/Axoissecure"

import axoissecure from "../../Hook/Axoissecure"








export const updateprofileOrgarole = async (email,Info) => {

    console.log("email from 5100 line",email,Info)
    const{data} = await axoissecure.patch(`/organizerprofileupdate/email/${email}`,Info)
    return data
}

// ppar

export const updateprofilePartecipent = async (email,Info) => {

    console.log("email from 5100 line",email,Info)
    const{data} = await axoissecure.patch(`/updateprofilePartecipent/email/${email}`,Info)
    return data
}