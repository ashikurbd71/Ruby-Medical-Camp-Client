import axoissecure from "../Hook/Axoissecure"


// post user info na drole
export const postuser = async( user,role) => {

    const Info = {

       email :  user?.email,
       role: role,
       status:'Verifyed'
    }

    const{data} = await axoissecure.put(`/users/${user?.email}`,Info)

    return data

}

// get user by role

export const getRole = async email => {

    console.log("email from 51 line",email)
    const{data} = await axoissecure.get(`/users/email/${email}`)
    console.log(data)
    return data.role

}



// post healcare dara


export const postHealthcaredata = async (email,profileinfo) => {

    console.log("email from 51 line",email,profileinfo)
    const{data} = await axoissecure.put(`/healthcareprofile/exit/${email}`,profileinfo)
    return data.role
}


// update data

export const updateHealthcaredata = async (email,profileinfo) => {

    console.log("email from 51 line",email,profileinfo)
    const{data} = await axoissecure.patch(`/healthcareprofile/update/${email}`,profileinfo)
    return data.role
}

// --------get data by email

export const getHealthcaredata = async email => {

    console.log("email from 48  line",email)
    const{data} = await axoissecure.get(`/healthcareprofile/email/${email}`,)
    return data
}






