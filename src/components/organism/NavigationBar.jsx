import { Link, NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import IconRecicle from "../../assets/IconRecicle.png"

function NavigationBar() {
  const navActiveClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        
        <img className={styles.logo} src={IconRecicle} alt="Logo" />
        <Link to="/">
          <h1>Recicla 365</h1>
        </Link>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/dashboard" className={navActiveClass}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/seuspontosdecoleta" className={navActiveClass}>
            Seus Pontos de Coleta
          </NavLink>
        </li>
        <li>
          <NavLink to="/pontosdecoleta" className={navActiveClass}>
            Pontos de coleta
          </NavLink>
        </li>
        <li>
          <NavLink to="/cadastropontodecoleta" className={navActiveClass}>
            Cadastrar Novo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
