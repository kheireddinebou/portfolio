import React from "react";
import "./services.scss";
import {BsCheck2Circle} from 'react-icons/bs'

const myServices =[
    'I Develop user interfaces',
    'I Build Responsive Web Applications',
    'Web page development',
    'I Create UX element interactions',
    'Convert PSD to HTML'
]

function Services() {
  return (
    <div id="services" className="services container">
      <h2 className="sec-title">Services</h2>
      <p className="sec-subTitle">What I Offer</p>

      <div className="card">
        <div className="top">
            Frontend Developer
        </div>

        <div className="bottom">
            {myServices.map((service, index) =>(
                <div key={index} className="row">
                    <BsCheck2Circle className="icon" />
                    <p>{service}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
