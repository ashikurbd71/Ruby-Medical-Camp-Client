

import axoissecure from "../../Hook/Axoissecure"





// register details post

export const postRegister = async registerInfo => {

    console.log("email from api 13 line --->",registerInfo)
    const{data} = await axoissecure.post('/register-camp',registerInfo)
    return data

}


// // get camp data all

// export const getCampdata = async () => {

//     const{data} = await axoissecure.get(`/register-camp`)
//    return data
// }


