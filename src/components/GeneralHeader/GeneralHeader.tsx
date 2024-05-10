import React from "react";

const GeneralHeader = (title: string, light?: boolean) => {
 return(
  <h1 style={light ? {color: '#fff'} : {color: "#000"}}>
   {title}
  </h1>
 )
}

export default GeneralHeader;
