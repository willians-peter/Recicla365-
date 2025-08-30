import { Navigate, Route, Routes, Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./components/organism/NavigationBar";
import LoginBar from "./components/organism/LoginBar";
import DashBoardPage from "./pages/DashBoardPage";
import CadastroPage from "./pages/CadastroPage";
import CadastroPontoDeColetaPage from "./pages/CadastroPontoDeColetaPage";
import SeusPontosDeColetaPage from "./pages/SeusPontosDeColeta";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/molecules/PrivateRoutes";
import "./App.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div key={location.pathname}>
      <LoginBar />
      <NavigationBar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashBoardPage />
            </PrivateRoute>
          }
        />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route
          path="/seuspontosdecoleta"
          element={
            <PrivateRoute>
              <SeusPontosDeColetaPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cadastropontodecoleta"
          element={
            <PrivateRoute>
              <CadastroPontoDeColetaPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
