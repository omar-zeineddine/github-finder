const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const { items } = await response.json();

  return items;
};

// get single user
export const getUser = async (login) => {
  const response = await fetch(`${URL}/users/${login}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

export const getUserRepos = async (login) => {
  // search params
  const params = new URLSearchParams({
    sort: "created",
    per_page: 5,
  });

  const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const data = await response.json();
  return data;
};
