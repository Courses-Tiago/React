import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Leticia", "Aline", "Janaina", "Amanda"]);
  //best practice due to exclusive identifier
  const [users, setUsers] = useState([
    {id: 1, name: "Lê", age: 38},
    {id: 2, name: "Aline", age: 35},
    {id: 3, name: "Carol", age: 30},
  ]);

  const deleteRandom = () => {
    // Generates a random whole value from 0 up to 3
    const randomNumber = Math.floor(Math.random() * 4);

    // Will return values different from the ID received
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  }

  return(
    <div>
      <ul>
        {/* If key is not used, the console issues errors */}
        {list.map((item, i) => (
          <li key={i}>Name: {item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>Name: {user.name} - Age: {user.age}</li>
        ))}
      </ul>
      <button onClick = {deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;