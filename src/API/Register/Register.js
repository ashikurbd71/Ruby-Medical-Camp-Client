

import axoissecure from "../../Hook/Axoissecure"





// register details post

export const postRegister = async registerInfo => {

    console.log("email from api 13 line --->",registerInfo)
    const{data} = await axoissecure.post('/register-camp',registerInfo)
    return data

}


// staus update   register rquest

export const updateStatus = async (_id,) => {

    
    console.log("email from api 25 line --->",_id)
    const{data} = await axoissecure.patch(`/register-camp/status/${_id}`)
     return data
}


// delete   register rquest

export const deleteStatus = async (_id) => {

    
    console.log("email from api 36 line --->",_id)
    const{data} = await axoissecure.delete(`/register-camp/delete/${_id}`)
     return data
}




