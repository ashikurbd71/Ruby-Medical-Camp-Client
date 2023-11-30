



import axoissecure from "../../Hook/Axoissecure"





// register details post

export const postUpcomingRegsiter = async upcamingcampInfo => {

    console.log("email from api 13 line --->",upcamingcampInfo)
    const{data} = await axoissecure.post('/add-upcamingregister-camp',upcamingcampInfo)
    return data

}