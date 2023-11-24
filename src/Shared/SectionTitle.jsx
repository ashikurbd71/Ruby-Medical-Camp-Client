import React from 'react';

const SectionTitle = ({title,heading}) => {
    return (

        <>
        <div className='my-10 text-center md:w-[600px] mx-auto'>
           
            <h1  className='text-xl spa uppercase md:text-3xl font-semibold  border-y-2 my-4 text-[#000000]'>{heading}</h1>
          
            <p className='text-xl font-light text-[#f77f00]'>-----{title}-----</p>
       
           
        </div>

        

</>
    );
};

export default SectionTitle;