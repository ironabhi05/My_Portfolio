import React from "react";
import './Footer.css'
let style = {
    color: "#ff4694",
    fontSize: "20px"

}
const Footer = () => {
  return (
    <div className="Footer">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div data-aos="fade-up" className="flex flex-wrap justify-center text-center mb-4">
        <span style={style}> Thank you for visiting! Let's connect:</span><span style={{color:'#776fff', fontSize:'20px'}}>ironabhi728@gmail.com</span> 
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
             Copyright &copy; 2024 <a href="#" style={style}><span>EgaleCoders</span>
                </a> . All Rights Reserved.
          </p>
          <div className="order-1 md:order-2">
          <span> Designed by</span> <span style={style}>Abhinav Mishra</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
