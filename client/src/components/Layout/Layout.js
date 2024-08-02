import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "70vh" }}>
        <Toaster duration={5000} batching={false} /> 
        {children}
      </main>
      <Footer />
    </div>
  );
};

layout.defaultProps = {
  title: "Ecommerce app-shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "uk",
};

export default layout;