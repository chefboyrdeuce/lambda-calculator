import React from "react";

const Display = (props) => { // "Display is a function - "
  console.log("Display", props, props.number);
  return <div className="display">
            {/* Display any props data here */}
            {props.number}
          </div>;
};

export default Display;

