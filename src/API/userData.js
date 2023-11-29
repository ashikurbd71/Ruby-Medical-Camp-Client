import axoissecure from "../Hook/Axoissecure"
import axoispublic from "../Hook/AxoissecurePublic"


export const getToken = async email => {

  
    const{data} = await axoissecure.post('/jwt',email)

     console.log('token 9  ------>',email)

    return data


}


// token remove
export const removeToken = async () => {

  
    const{data} = await axoissecure.get('/logout')

    return data


}






// post user info na drole
export const postuser = async( user,role) => {

    const Info = {

       email :user?.email,
       role:role,
       status:'Verifyed'
    }

    const{data} = await axoispublic.put(`/users/${user?.email}`,Info)

    return data

}

// get user by role

export const getRole = async email => {

    console.log("email from 51 line",email)
    const{data} = await axoispublic.get(`/users/email/${email}`)
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






