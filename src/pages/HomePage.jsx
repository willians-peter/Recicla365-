import ButtonCustom from "../components/atoms/ButtonCustom";
import Natureza from "../assets/Natureza.jpeg";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );
    if (usuario) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      navigate("/dashboard"); // Redirecionar para a página de dashboard
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const handleCadastrar = () => {
    console.log("Cadastrar clicado");
    navigate("/cadastro", {replace:true});
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <p>Recycla 365</p>
        <img src={Natureza} alt="Natureza com montanhas, floresta e rio com simbolo de reciclagem" />
      </div>
      <div className={styles.loginForm}>
        <h2>Bem Vindo!</h2>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="E-mail" required />
          <input type="password" name="senha" placeholder="Senha" required />
          <ButtonCustom type="submit" texto="Logar" />
        </form>
        <ButtonCustom type="button" texto="Cadastrar" onClick={handleCadastrar} />
      </div>
    </div>
  );
}

export default HomePage;