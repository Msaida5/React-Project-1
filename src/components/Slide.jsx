import React from 'react'

const Slide = ({img,name,title,text,desc}) => {
  return (
    <div className="container slide">
    <div className="row">
      <div className="col slide_left text-start p-0">
    <h5>{name}</h5>
    <h1>{title}</h1>
    <p>{text}</p>
    <p>{desc}</p>
    <button className='btn btn-primary' id='slide_btn'>Read Case Study</button>
    <div className='d-flex'>
        <div className='d-flex flex-column' id='miks'>
            <span id="number">15%</span>
            <span id='write'>ROI increase</span>
        </div>
        <div className='d-flex flex-column'>
        <span id="number">60k</span>
        <span id='write'>Monthly website visits</span>
        </div>
    </div>
      </div>
      <div className="col slide_right p-0">
       <img src={img} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Slide