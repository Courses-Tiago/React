// valid comment
/* also a multiple
   line comment 
*/
import ChildComponent from "./ChildComponent";

const FirstComponent = () => {
  //valid comment
  return (
    <div>
      {/* valid jsx comment*/}
      <h1>My First Component!</h1>
      <ChildComponent/>
    </div>
  );
};

export default FirstComponent;