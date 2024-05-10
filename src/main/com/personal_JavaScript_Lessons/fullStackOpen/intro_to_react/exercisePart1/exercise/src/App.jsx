function App() {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  const TotalExercises = () => {
    let sum = 0;
    sum += part1.exercises + part2.exercises + part3.exercises;
    let returningString = `Number of exercises ${sum}`;
    return <p>{returningString}</p>;
  };

  return (
    <div>
      <h1>{course}</h1>
      <Part name={part1.name} exercises={part1.exercises} />

      <Part name={part2.name} exercises={part2.exercises} />

      <Part name={part3.name} exercises={part3.exercises} />
      <TotalExercises />
    </div>
  );
}

export default App;
