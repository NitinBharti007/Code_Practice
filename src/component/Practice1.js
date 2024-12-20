import React, { useEffect, useState } from "react";

const Practice1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ol>
        {data.map((user) => (
          <li key={user.id}>
            Name: {user.name}--{user.email}--{user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Practice1;
