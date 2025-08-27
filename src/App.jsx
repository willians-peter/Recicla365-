import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/organism/NavigationBar";
import DashBoardPage from "./pages/DashBoardPage";
import CadastroPage from "./pages/CadastroPage";
import PontosDeColetaPage from "./pages/PontosDeColetaPage";
import CadastroPontoDeColetaPage from "./pages/CadastroPontoDeColetaPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/pontosdecoleta" element={<PontosDeColetaPage />} />
        <Route
          path="/cadastropontodecoleta"
          element={<CadastroPontoDeColetaPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
