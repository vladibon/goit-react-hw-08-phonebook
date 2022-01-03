const getUsername = state => state.auth.user.name;
const getIsRefreshed = state => state.auth.isRefreshed;
const getIsLoggedIn = state => Boolean(state.auth.user.email);

const authSelectors = {
  getUsername,
  getIsRefreshed,
  getIsLoggedIn,
};
export default authSelectors;
