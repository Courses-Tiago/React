import { useState } from "react";

const ManageData = () => {
  //10 is the value to initialize number var
  const [number, setNumber] = useState(10);
  return (
    <div>
      <h2>Value: {number}</h2>
      <button onClick={() => setNumber((number) => number + 5)}>Increase number</button>
      <div>
        <button onClick={() => setNumber(0)}>Clean number</button>
      </div>
    </div>
  );
};

export default ManageData;