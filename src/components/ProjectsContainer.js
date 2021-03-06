import React from "react";

import ProjectDetail from "./ProjectDetail";

export default props => {
  return (
    <div className="section controlled-width-section">
      {props.projects.map((el, i) => (
        <ProjectDetail prj={el} key={i} inverse={i % 2 === 0} />
      ))}
    </div>
  );
};
