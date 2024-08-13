import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 " style={{ marginRight: "10px" }}>
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <div style={{color:"black",background:"white",borderRadius:"20px",padding:"10px"}}>
            <p>
              At eKart, we respect your privacy. We collect only necessary
              information, like your name and payment details, to process
              orders. We don't sell your data. Your info is secure with us. You
              can update or delete your data anytime. We use cookies to enhance
              your experience.{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
