const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Event issued!");
  };

  const renderHtml = (condition) => {
    if (condition) {
      console.log(condition);
      return <h2>Rendering for condition!</h2>;
    } else {
      console.log(condition);
      return <h2>Also rendering for condition!</h2>;
    }
  };

  return (
    <div>
      <div>
        {/*When the function is handleMyEvent(), the code will directly read 
        and execute it. If the intention is to execute only on events, it
        must be handleMyEvent.*/}
        <button onClick={handleMyEvent}>Click here!</button>
      </div>
      <div>
        <button onClick={() => console.log("Inline function!")}>Click here - inline!</button>
      </div>
      {/*On this case the directly function execution is desired*/}
      {renderHtml(true)}
      {renderHtml(false)}
    </div>
  );
};

export default Events;