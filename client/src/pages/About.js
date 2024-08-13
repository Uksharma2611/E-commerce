import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 " style={{marginRight:"10px"}}>
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" ,borderRadius:"20px"}}
          />
        </div>
        <div className="col-md-5" >
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2" style={{color:"black",background:"white",borderRadius:"20px",padding:"10px"}}>
             E-Kart is your trusted online shopping destination, offering a wide
            range of products at competitive prices. We are committed to
            providing a seamless and enjoyable shopping experience, backed by
            top-notch customer service. Our mission is to make online shopping
            easy, convenient, and accessible for everyone. Welcome to a new way
            of shopping—welcome to eKart. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
