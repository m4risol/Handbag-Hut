import React from "react";
import NavigationBar from "./navigation-bar";
import NavigationItems from "./navigation-items";
import NavigationLogo from "./navigation-logo";

const Navigation = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <NavigationLogo/>
      <NavigationItems/>
    </React.Fragment>
  );
};

export default Navigation;
