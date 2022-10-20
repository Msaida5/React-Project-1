import React from 'react';
import photo1 from "../img/others/bubble-39.png";
import photo2 from '../img/banner/window.png';
import photo3 from '../img/banner/laptop-poses.png';
import ServicesCard from '../components/ServicesCard';
import servicesdata from '../data/servicesdata';
import SlideChange from '../components/SlideChange';
// import { useContext } from 'react';
// import { AbstrackContext } from '../components/context/AbstrackContext';

const DigitalAgency = () => {
  // const [abstrack,setAbstrack] = useContext(AbstrackContext);
  return (
    <div>
      <section className='banner'>
        <img src={photo1} alt="" className='position-absolute top-0 start-0' id='top_circle' />
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-sm-6 banner_left">
              <h1>Build beautiful website & mobile apps.</h1>
              <p id="banner_text">Create live segments and target the right people for messages<br /> based on their behaviors.</p>
              <button>Get Started</button>
            </div>
            <div className="col-12 col-sm-6 banner_right">
              <div className='d-flex justify-content-center align-items-center' id="chat_back">
              </div>
              <img src={photo2} alt="banner_window" id='banner_window' />
              <img src={photo3} alt="laptop-poses" id='laptop-poses' />
            </div>
          </div>
        </div>
      </section>

      <section className='services'>
        <div className='container' id='services_text'>
          <h5>What We Can Do For You</h5>
          <h1>Services we can help you<br /> with</h1>
          <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum<br /> eget vulputate augue sed eu imperdiet.</p>
        </div>
        
        <div className='container d-flex flex-wrap' >
          {servicesdata.map((fd) => {
            return <ServicesCard icon={fd.icon} title={fd.title} desc={fd.desc}  />
          })}
        </div>
      </section>

      <div className='mt-5'>
        <SlideChange />
      </div>

          <section className='aboutus' id="formsection">
          <div className="container slide dv">
    <div className="row">
      <div className="col slide_left text-start p-0">
    <h5>About Us</h5>
    <h1>We do design, code & develop.</h1>
    <p>Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor molestie pellentesque.</p>
    <p>Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim eget libero.</p>
      </div>
      <div className="col slide_right p-0">
       <form className="formdiv">
         <h3 id='formh3' className="d-flex justify-content-center align-items-center">Get a free Keystroke quote now</h3>
         <label for="exampleInputEmail1" className="form-label py-3">Name</label>
         <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Saida Mejidova'/>
         <label for="exampleInputEmail1" className="form-label py-3">Email</label>
         <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='mejidovasaida5@gmail.com'/>
         <label for="exampleInputEmail1" className="form-label py-3">Number</label>
         <input type="number" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='+994557789872'/>
         <button className="button-65" role="button">Get Free Quote</button>
       </form>
      </div>
    </div>
    </div>
          </section>
    </div>




  )
}

export default DigitalAgency