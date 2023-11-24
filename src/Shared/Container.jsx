import React from 'react';

const Container = ({children}) => {
    return (
        
        <div className='xl:max-w-[1920px ] lg:wax-w-[1000px] md:max-w-[ 960px] mx-auto px-5'>
       
        {children}

        </div>
    );
};

export default Container;