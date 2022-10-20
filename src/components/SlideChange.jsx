import React, { Component } from 'react'
import { useState } from 'react';
import slidedata from '../data/slidedata';
import Slide from './Slide';


const Products  =()=> {
  const [style1,setStyle1] = useState('d-flex');
  const [style2,setStyle2] = useState('d-none');
  const [style3,setStyle3] = useState('d-none');
    return (
      <div className='container mt-5 '>
        <div className="row">

            <div className={style1}>
            {slidedata[0].map((fd)=>{
              return <Slide img={fd.img} name={fd.name} title={fd.title}   text={fd.text} 
             />
            })}
            </div>  
            <div className={style2}>
            {slidedata[1].map((fd)=>{
              return <Slide img={fd.img} name={fd.name}  title={fd.title}   text={fd.text}
        />
            })}
            </div>  
            <div className={style3}>
            {slidedata[2].map((fd)=>{
              return <Slide img={fd.img} name={fd.name}  title={fd.title}   text={fd.text} 
              />
            })}
            </div>  

            <div className='d-flex  mb-4 ' id='buttons'>
          <button onClick={()=>{setStyle1('d-flex');setStyle2('d-none');setStyle3('d-none')}} type="button" className="btn border-0 p-0 mx-2"></button>
          <button onClick={()=>{setStyle1('d-none');setStyle2('d-flex');setStyle3('d-none')}} type="button" className="btn border-0 p-0 mx-2 "></button>
          <button onClick={()=>{setStyle1('d-none');setStyle2('d-none');setStyle3('d-flex')}} type="button" className="btn border-0 p-0 mx-2 "></button>
          </div>
        
        </div>
      </div>
    )
  }

export default Products;


