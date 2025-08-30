import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import IconRecicle from "../../assets/IconRecicle.png";
import { useState, useEffect } from "react";

function NavigationBar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <img className={styles.logo} src={IconRecicle} alt="Logo" />
        <NavLink to="/">
          <h1>Recicla 365</h1>
        </NavLink>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/dashboard"
            className={
              currentPath === "/dashboard" ? styles.active : ""
            }
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/seuspontosdecoleta"
            className={
              currentPath === "/seuspontosdecoleta" ? styles.active : ""
            }
          >
            Seus Pontos de Coleta
          </NavLink>
        </li>
      
      </ul>
    </nav>
  );
}

export default NavigationBar;