import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </p>
  );
};

const Header = (prop) => {
  return (
    <>
      <h1>{prop.course}</h1>
    </>
  );
};

const Content = (prop) => {
  return <div>{prop.children}</div>;
};

const FinishedProduct = (props) => {
  for (let i = 0; i < 2; i++) {
    <>
      <Header course={props.course[i].name} />

      <Content
        children={props.course[i].parts.map((element) => (
          <p key={element.name}>
            {element.name} {element.exercises}
          </p>
        ))}
      />
      <Total parts={props.course[i].parts} />
    </>;
  }
};

const Course = (props) => {
  return (
    <>
      <Header course={props.course[0].name} />

      <Content
        children={props.course[0].parts.map((element) => (
          <p key={element.name}>
            {element.name} {element.exercises}
          </p>
        ))}
      />
      <Total parts={props.course[0].parts} />

      <Header course={props.course[1].name} />

      <Content
        children={props.course[1].parts.map((element) => (
          <p key={element.name}>
            {element.name} {element.exercises}
          </p>
        ))}
      />
      <Total parts={props.course[1].parts} />
    </>
  );
};

export default Course;
