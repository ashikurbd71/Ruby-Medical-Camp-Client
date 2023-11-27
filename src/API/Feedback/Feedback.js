import axoissecure from "../../Hook/Axoissecure"





//get data by email and paid status


export const getFeedback = async email => {

    console.log('line12 ------>',email)

    const{data} = await axoissecure.get(`/feedback-and-ratings/email/${email}`)
   return data
}





// post feedback




export const postFeedback = async feedbackInfo => {

    console.log("email from feed 30 line --->",feedbackInfo)
    const{data} = await axoissecure.post('/feedback-camp',feedbackInfo)
    return data

}


