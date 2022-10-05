import { createContext, useState } from "react";

const GithubContext = createContext();

const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${URL}/users`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
