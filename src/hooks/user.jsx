import React, { useEffect, useState } from "react";
import axios from "axios";

function User(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }

    getUser();
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
