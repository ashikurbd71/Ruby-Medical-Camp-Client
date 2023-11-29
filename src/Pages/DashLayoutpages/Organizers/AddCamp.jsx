import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import Container from '../../../Shared/Container';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { addCampdata } from '../../../API/CampsData/addCamp';
import axios from 'axios';
import useAuth from '../../../Hook/useAuth';







const AddCamp = () => {

const{user} = useAuth()

// from data console
    const { register, formState: { errors },handleSubmit,reset } = useForm()
    const onSubmit =async(data) => {
    
        const imagefile = {image : data?.image[0]}
  
        console.table(imagefile)
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,imagefile,{

        headers: {
            'content-type': 'multipart/form-data'
        }
        })
      console.log(res)
      
    //  statement

      if (res.data.success) {
          // now send the menu item data to the server with the image url
          const campInfo = {
              campname: data.name,
              location : data.location,
              fees: parseInt(data.fees) ,
              services:data.services,
              professional:data.professional,
              audience:data.audience,
              date: data.date,
              time:data.time,
              message:data.message,
              image: res.data.data.display_url,
              count: 0,
              orgnaizer:{
                email:user?.email,
                name:user?.displayName
              }
          }
          // 
          console.log(campInfo)
          const campRes = await addCampdata(campInfo);
          console.log(campRes)
          if(campRes.insertedId){
        
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} is added to the menu.`,
                  showConfirmButton: false,
                  timer: 1500
                });
  
                console.log( 'with image url', res.data);
          }
      }}


    return (
        <div className='mb-10'>
            <Container>

            <SectionTitle heading={'Add Camps'} title={'Add New Camp!'}/>



            <div className='mb-5'>



            <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="sr-only">Camp Name</label>
            <input
             {...register('name', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Camp Name"
              type="text"
              id="name"
            />
             {errors.name && <span className="text-red-600">Name is required</span>}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" >Venue Location,</label>
              <input
               {...register('location', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Venue Location,"
                type="text"
                id="text"
                
              />
               {errors.location && <span className="text-red-600">Location is required</span>}
            </div>

            <div>
              <label className="sr-only">Specialized Services Provided,</label>
              <input
                       {...register('services', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Specialized Services Provided,"
                type="text"
                id="text"
              />
               {errors.services && <span className="text-red-600">Services is required</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
         

         

          <div className=' p-2 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-2 py-2 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                    // onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-20 hidden'
                      type='file'
                      {...register('image', { required: true })}
                     
                      id='image'
                      accept='image/*'
                      hidden
                    />
                       {errors.image && <span className="text-red-600">image is required</span>}
                    <div className='bg-[#1976D2] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#1976D2]'>
                     Upload Camp Photo
                    </div>
                  </label>
                </div>
              </div>
            </div>
{/* <div className="form-control w-full my-6">
    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
</div> */}

            <div>
              <label className="sr-only">Healthcare Professionals</label>
              <input
                {...register('professional', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Healthcare Professionals"
                type="TEXT"
                id="text"
              />
               {errors.professional && <span className="text-red-600">Professionals is required</span>}
            </div>

            <div>
              <label className="sr-only" >Target Audience</label>
              <input
                   {...register('audience', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Target Audience"
                type="number"
                id="phone"
              />
              {errors.audience && <span className="text-red-600">Target is required</span>}
            </div>

            <div>
              <label className="sr-only"> Camp Fees</label>
              <input
               {...register('fees', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder=" Camp Fees"
                type="&"
                id=""
              />
                 {errors.fees && <span className="text-red-600">Fees is required</span>}
            </div>

            <div>
              <label className="sr-only">Date</label>
              <input
               {...register('date', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Date"
                type="date"
                id="phone"
              />
                    {errors.date && <span className="text-red-600">Date is required</span>}
            </div>

            <div>
              <label className="sr-only">Time</label>
              <input
               {...register('time', { required: true })}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Time"
                type="time"
                id="phone"
              />
                {errors.time && <span className="text-red-600">Time is required</span>}
            </div>
          </div>

          <div>
            <label className="sr-only"> Comprehensive Description</label>

            <textarea
               {...register('message', { required: true })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder=" Comprehensive Description"
              rows="8"
              id="message"
            ></textarea>
             {errors.message && <span className="text-red-600">message is required</span>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Add Camp
            </button>
          </div>
        </form>
      </div>

  </div>
            </Container>
          
        </div>
    );
};

export default AddCamp;


// <form onSubmit={handleSubmit(onSubmit)}>
// <div className="form-control w-full my-6">
//     <label className="label">
//         <span className="label-text">Recipe Name*</span>
//     </label>
//     <input
//         type="text"
//         placeholder="Recipe Name"
//         {...register('name', { required: true })}
//         required
//         className="input input-bordered w-full" />
// </div>
// <div className="flex gap-6">
//     {/* category */}
//     <div className="form-control w-full my-6">
//         <label className="label">
//             <span className="label-text">Category*</span>
//         </label>
//         <select defaultValue="default" {...register('category', { required: true })}
//             className="select select-bordered w-full">
//             <option disabled value="default">Select a category</option>
//             <option value="salad">Salad</option>
//             <option value="pizza">Pizza</option>
//             <option value="soup">Soup</option>
//             <option value="dessert">Dessert</option>
//             <option value="drinks">Drinks</option>
//         </select>
//     </div>

//     {/* price */}
//     <div className="form-control w-full my-6">
//         <label className="label">
//             <span className="label-text">Price*</span>
//         </label>
//         <input
//             type="number"
//             placeholder="Price"
//             {...register('price', { required: true })}
//             className="input input-bordered w-full" />
//     </div>

// </div>
// {/* recipe details */}
// <div className="form-control">
//     <label className="label">
//         <span className="label-text">Recipe Details</span>
//     </label>
//     <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
// </div>

// <div className="form-control w-full my-6">
//     <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
// </div>

// <button className="btn">
//     Add Item
// </button>
// </form>