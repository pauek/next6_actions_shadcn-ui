const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export const loadUsers = async (numUsers = 20) => {
  // await sleep(2000);
  const response = await fetch(
    `https://randomuser.me/api?results=${numUsers}&seed=20240521`
  );
  const { results } = await response.json();
  return results;
};

export const loadUserByUsername = async (username) => {
  const allUsers = await loadUsers();
  const index = allUsers.findIndex(
    (user) => user.login.username === username
  );
  return index === -1 ? null : allUsers[index];
};
