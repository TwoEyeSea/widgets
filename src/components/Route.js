const Route = ({ path, children }) => {
  // Wi

  return window.location.pathname === path ? children : null;
};

export default Route;
