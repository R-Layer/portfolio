import React from "react";

export default props => {
  return (
    <article>
      <h4 className="title is-4 project-title">{props.prj.title}</h4>
      <div className="columns">
        {!props.inverse && (
          <figure className="column is-7">
            <img src={props.prj.imageUrl} alt="screenshot" className=" image" />
            <figcaption>{props.prj.imageCaption}</figcaption>
          </figure>
        )}
        <p className="column is-5">{props.prj.description}</p>
        {props.inverse && (
          <figure className="column is-7">
            <img src={props.prj.imageUrl} alt="screenshot" className=" image" />
            <figcaption>{props.prj.imageCaption}</figcaption>
          </figure>
        )}
      </div>
      <hr />
    </article>
  );
};
