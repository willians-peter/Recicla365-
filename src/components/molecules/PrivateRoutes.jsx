import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLogado) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;