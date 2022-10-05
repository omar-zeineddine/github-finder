import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const { items } = await response.json();

    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // set loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, searchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
