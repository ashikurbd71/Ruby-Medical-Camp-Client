import axoissecure from "../Hook/Axoissecure"


// post user info na drole
export const postuser = async user => {

    const Info = {

       email :  user?.email,
       role: 'participants',
       status:'Verifyed'
    }

    const{data} = await axoissecure.put(`/users/${user?.email}`,Info)

    return data

}

// get user by role

export const getRole = async email => {

    console.log("email from 51 line",email)
    const{data} = await axoissecure.get(`/users/email/${email}`)
    return data.role

}




