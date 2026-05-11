const TemplateExpressions = () => {
  const name = "Tiago"
  const data = {
    age: 36,
    job: "Software Development Analyst II",
  };
  return (
    <div>
      <h2>Printing the name: {name}, age: {data.age} and job: {data.job}</h2>
      {/*the code below only will appear on inspect and console option*/}
      <h2>{console.log("Javascript code being printed!")}</h2>
    </div>
  );
};

export default TemplateExpressions;