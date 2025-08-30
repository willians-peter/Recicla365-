import NavigationBar from "../components/organism/NavigationBar";
import LoginBar from "../components/organism/LoginBar";
import styles from "./SeusPontosDeColeta.module.css";
import { useParams, useNavigate } from "react-router-dom";
import ButtonDeletar from "../components/atoms/ButtonDeletar";
import ButtonCustom from "../components/atoms/ButtonCustom";
import { useState, useEffect } from "react";

const SeusPontosDeColetaPage = () => {
  const navigate = useNavigate();
  const [pontosDeColeta, setPontosDeColeta] = useState([]);
  const [usuarioLogado] = useState (JSON.parse(localStorage.getItem("usuarioLogado")));

  useEffect(() => {
    const pontosDeColetaSalvos = JSON.parse(
      localStorage.getItem("pontosDeColeta")
    );
    if (pontosDeColetaSalvos) {
      const pontosDeColetaDoUsuario = pontosDeColetaSalvos.filter(
        (ponto) => ponto.usuario.cpf === usuarioLogado.cpf
      );
      setPontosDeColeta(pontosDeColetaDoUsuario);
    }
  }, [usuarioLogado]);

  const handleDeletarPonto = (index) => {
    const novosPontosDeColeta = pontosDeColeta.filter(
      (ponto, i) => i !== index
    );
    localStorage.setItem("pontosDeColeta", JSON.stringify(novosPontosDeColeta));
    setPontosDeColeta(novosPontosDeColeta);
  };
   const handleCadastrar = () => {
    navigate("/cadastropontodecoleta", { replace: true });
  };

  return (
    <>
      <LoginBar />
      <NavigationBar />
      <div className={styles.container}>
        <h1>Seus Pontos De Coleta</h1>
<ButtonCustom type="button" texto="Cadastrar Novo" onClick={handleCadastrar} />
        {pontosDeColeta.map((ponto, index) => (
          <div key={index} className={styles.card}>
            <h2>{ponto.nome}</h2>
            <p>
              Endereço: {ponto.endereco.logradouro}, {ponto.endereco.numero} -{" "}
              {ponto.endereco.bairro}, {ponto.endereco.cidade} -{" "}
              {ponto.endereco.estado}
            </p>
            <p>Materiais aceitos: {ponto.materiais.join(", ")}</p>
            <ButtonDeletar onClick={() => handleDeletarPonto(index)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SeusPontosDeColetaPage;
