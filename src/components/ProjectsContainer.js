import React from "react";

import ProjectDetail from "./ProjectDetail";

export default props => {
  return (
    <article className="section">
      {props.projects.map((el, i) => (
        <ProjectDetail prj={el} key={i} inverse={i % 2 === 0} />
      ))}
    </article>
  );
};
