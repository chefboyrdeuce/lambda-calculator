import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
import { specials } from '../../../data.js';

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {specials.map(special => <SpecialButton text={special} />)} 
    </div>
  );
};

export default Specials;