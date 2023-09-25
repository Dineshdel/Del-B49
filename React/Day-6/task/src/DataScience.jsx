import React from "react";
import image1 from "./assets/ds.png";

const DataScience = () => {
  return (
    <div>
      <br></br>
      <img src={image1} style={{ width: "600px", height: "400px" }} />
      <h1>Data Science</h1>
      <p>
        Data science combines math and statistics, specialized programming,
        advanced analytics, artificial intelligence (AI), and machine learning
        with specific subject matter expertise to uncover actionable insights
        hidden in an organization's data. These insights can be used to guide
        decision making and strategic planning.
      </p>
    </div>
  );
};

export default DataScience;
