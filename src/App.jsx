import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/organism/NavigationBar";
import DashBoardPage from "./pages/DashBoardPage";
import CadastroPage from "./pages/CadastroPage";
import PontosDeColetaPage from "./pages/PontosDeColetaPage";
import CadastroPontoDeColetaPage from "./pages/CadastroPontoDeColetaPage";
import SeusPontosDeColetaPage from "./pages/SeusPontosDeColeta";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/molecules/PrivateRoutes";
import "./App.css";

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
          path="/pontosdecoleta"
          element={
            <PrivateRoute>
              <PontosDeColetaPage />
            </PrivateRoute>
          }
        />
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
