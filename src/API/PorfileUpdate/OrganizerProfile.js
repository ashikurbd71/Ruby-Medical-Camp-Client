// import axoissecure from "../../Hook/Axoissecure"

import axoissecure from "../../Hook/Axoissecure"








export const updateprofileOrgarole = async (role,Info) => {

    console.log("email from 5100 line",role,Info)
    const{data} = await axoissecure.patch(`/organizerprofileupdate/role/${role}`,Info)
    return data.role
}

// ppar

export const updateprofilePartecipent = async (role,Info) => {

    console.log("email from 5100 line",role,Info)
    const{data} = await axoissecure.patch(`/updateprofilePartecipent/role/${role}`,Info)
    return data.role
}