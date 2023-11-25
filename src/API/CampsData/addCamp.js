
import axoissecure from "../../Hook/Axoissecure"

// post user by role



export const addCampdata = async (campInfo) => {

    console.log("email from 51 line",campInfo)
    const{data} = await axoissecure.post('/add-a-camp',campInfo)
    return data

}


//get data by role


export const getCampdata = async email => {

    const{data} = await axoissecure.get(`/add-a-camp/${email}`)
   return data
}


// update camp data

export const updateCampdata = async (_id,campInfo) => {

    console.log("from 31 ---->",campInfo)
    const{data} = await axoissecure.put(`/update-camp/${_id}`,campInfo)
   return data
}


