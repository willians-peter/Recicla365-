import { Link, NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const navActiveClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <img className={styles.logo} src="/favicon.ico" alt="Logo" />
        <Link to="/">
          <h1>Recicla 365</h1>
        </Link>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={navActiveClass}>
            Início
          </NavLink>
        </li>
         <li>
          <NavLink to="/dashboard" className={navActiveClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/cadastro" className={navActiveClass}>
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink to="/pontosdecoleta" className={navActiveClass}>
            PontosDeColeta
          </NavLink>
        </li>
         <li>
          <NavLink to="/cadastropontodecoleta" className={navActiveClass}>
            cadastropontodecoleta
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
