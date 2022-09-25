import React, { Children } from "react";
import { Navigation, Footer } from "@components/core";

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
