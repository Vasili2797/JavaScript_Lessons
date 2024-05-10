function App() {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Part = (props) => {
    return (
      <div>
        {props.name} {props.exercises}
      </div>
    );
  };

  const TotalExercises = () => {
    let sum = 0;

    parts.map((element) => {
      sum += element.exercises;
    });

    let returningString = `Number of exercises ${sum}`;
    return <p>{returningString}</p>;
  };

  return (
    <div>
      <h1>{course}</h1>
      <Part
        name={parts.map((element) => (
          <p key={element.name}>
            {element.name} {element.exercises}
          </p>
        ))}
      />
      <TotalExercises />
    </div>
  );
}

export default App;
