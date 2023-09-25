import React from "react";
import image1 from "./assets/fsd.png";
import image2 from "./assets/ds.png";
import image3 from "./assets/cs.png";
//
//

const All = () => {
  return (
    <div>
      <h1>All Computer Science Courses...</h1>
      <img src={image1} style={{ width: "300px", height: "200px" }} />
      <img src={image2} style={{ width: "300px", height: "200px" }} />
      <img src={image3} style={{ width: "300px", height: "200px" }} />

      <div></div>
    </div>
  );
};

export default All;
