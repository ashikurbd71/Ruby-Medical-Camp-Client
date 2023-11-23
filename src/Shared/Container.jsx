import React from 'react';

const Container = ({children}) => {
    return (
        
        <div className='xl:max-w-[1920px ] lg:wax-w-[1280px] md:[ 960px] mx-auto px-5'>
       
        {children}

        </div>
    );
};

export default Container;