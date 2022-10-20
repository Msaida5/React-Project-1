import React from 'react';


const ServicesCard = ({icon, title, desc}) => {
    return (
        <div className=' d-flex  mt-5 mx-2 ' id='services_card' >
            <div className='mt-5 mx-4'><img src={icon} alt="" /></div>
            <div className='mt-5' id="info">
                <h5 className='text-white mb-4'>{title}</h5>
                <p className='text-muted pe-4 ' id='text'>{desc}</p>
                <h6 className='text-white' id='find'><span id='xet'></span>Find out more</h6>
            </div>
        </div>
    )
}
export default ServicesCard