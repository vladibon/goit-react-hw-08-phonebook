const getIsLoggedIn = state => Boolean(state.auth.user.email);
const getUsername = state => state.auth.user.name;
const getIsRefreshed = state => state.auth.isRefreshed;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshed,
};
export default authSelectors;
