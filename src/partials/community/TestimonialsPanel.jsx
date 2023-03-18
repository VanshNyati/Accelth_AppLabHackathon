import React, { useState} from 'react';
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import './main.css';

const TestimonialsPanel = () => {

  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials bg-gradient">
      <div className="left-t">
        <div className="t-heading">
          <h1>What They <br></br>
             Say About Us
          </h1>
        </div>
        {/* <div className="t-sub">
          <p>What They <br></br>
            Say About Us
          </p>
        </div> */}
        {/* <span><h1>Testimonials</h1></span> */}
        {/* <span><h2>What they </h2></span>
        <span><h2>say about us</h2> </span> */}
        
        <span>
           {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{color: 'var(--orange)'}}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
          <img src={testimonialsData[selected].image} alt=" "/>

          <div className="arrows">
            <img
              onClick={() => {
                selected===0
                  ?setSelected(tLength -1 )
                  :setSelected((prev)=> prev-1);
              }}
              src={leftArrow} 
              alt=""
            /> 
            <img
              onClick={() => {
                selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
              }}
               src={rightArrow} 
               alt =""
            />  
          </div>
      </div>
    </div>
  );
};

export default TestimonialsPanel;