import { useState } from "react";

const ConditionalRender = () => {
  const [x, setX] = useState(true);

  const [name, setName] = useState("Tiago");

  return (
    <div>
      <h1>Should it be shown?</h1>
      {/*x && = if (x) {} */}
      {x && <p>Must be shown if X is true</p>}
      {!x && <p>Must be shown if X is false</p>}
      <button onClick={ () => setX((x) => x = !x) }>Change X State</button>
      <h2>Ternary Condition</h2>
      {name === "John" ? (
        <div>
          <p>The name is John</p>
        </div>  
      ) : (
        <div>
          <p>Unknown Name</p>
        </div>
      ) }
      <button onClick={ () => setName((name) => name = "John") }>Click here</button>
    </div>
  );
};

export default ConditionalRender;