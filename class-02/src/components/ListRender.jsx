import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Leticia", "Aline", "Janaina", "Amanda"]);
  //best practice due to exclusive identifier
  const [users] = useState([
    {id: 1, name: "Leh", age: 38},
    {id: 741, name: "Aline", age: 35},
    {id: 1458, name: "Carol", age: 30},
  ]);

  return(
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>Name: {item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>Name: {user.name} - Age: {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;