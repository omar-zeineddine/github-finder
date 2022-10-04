import React from "react";
import { useEffect, useState } from "react";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user, i) => {
          <h3>{user.login}</h3>;
        })}
      </div>
    </div>
  );
};

export default UserResults;
