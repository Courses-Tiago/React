import { useState } from "react";

const ManageData = () => {
  //10 is the value to initialize number var
  const [number, setNumber] = useState(10);
  const [message, setMessage] = useState("Hello");

  const handleClick = () => {
    setMessage("Goodbye");
  }
  return (
    <div>
      <h2>Value: {number}</h2>
      <button onClick={() => setNumber((number) => number + 5)}>Increase number</button>
      <div>
        <button onClick={() => setNumber(0)}>Clean number</button>
      </div>
      <div>
        <h3>{message}</h3>
        <button onClick={handleClick}>Change Message</button>
      </div>
    </div>
  );
};

export default ManageData;