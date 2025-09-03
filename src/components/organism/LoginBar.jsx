import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./LoginBar.module.css";
import ButtonCustom from "../atoms/ButtonCustom";

function LoginBar() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  const navigate = useNavigate();

  const navActiveClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  const handleSair = () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "/";
  };
  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <h1>Bem-vindo(a), {usuarioLogado?.nome}!</h1>
        <ButtonCustom
          className={styles.buttonSair}
          type="button"
          texto="Sair"
          onClick={handleSair}
        />
      </div>
    </nav>
  );
}

export default LoginBar;
