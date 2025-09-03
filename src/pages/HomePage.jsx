import ButtonCustom from "../components/atoms/ButtonCustom";
import Natureza from "../assets/Natureza.jpeg";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import UsuariosPadrao from "../components/molecules/UsuariosPadrao";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (!usuariosSalvos) {
      localStorage.setItem("usuarios", JSON.stringify(UsuariosPadrao));
    }
  }, []);

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
      navigate("/dashboard");
    } else {
      alert("Email ou senha inválidos");
    }
  };

  const handleCadastrar = () => {
    navigate("/cadastro", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <p className={styles.title}>Recycla 365</p>
        <img
          src={Natureza}
          alt="Natureza com montanhas, floresta e rio com simbolo de reciclagem"
        />
      </div>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Seu endereço de email"
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Sua senha"
            required
          />
          <ButtonCustom type="submit" texto="Logar" />
          <br />
          <ButtonCustom
            type="button"
            texto="Cadastrar"
            onClick={handleCadastrar}
          />
        </form>
      </div>
    </div>
  );
};

export default HomePage;
