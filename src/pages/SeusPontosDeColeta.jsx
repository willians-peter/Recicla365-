import NavigationBar from "../components/organism/NavigationBar";
import LoginBar from "../components/organism/LoginBar";
import styles from "./SeusPontosDeColeta.module.css";
import { useNavigate } from "react-router-dom";
import ButtonDeletar from "../components/atoms/ButtonDeletar";
import ButtonCustom from "../components/atoms/ButtonCustom";
import { useState, useEffect } from "react";
import LocaisPadrao from "../components/molecules/LocaisPadrao.jsx";

const SeusPontosDeColetaPage = () => {
  const navigate = useNavigate();
  const [pontosDeColeta, setPontosDeColeta] = useState([]);
  const [usuarioLogado] = useState(
    JSON.parse(localStorage.getItem("usuarioLogado"))
  );
  const [editarPonto, setEditarPonto] = useState(null);

  useEffect(() => {
    const pontosDeColetaSalvos = JSON.parse(
      localStorage.getItem("pontosDeColeta")
    );
    if (!pontosDeColetaSalvos) {
      localStorage.setItem("pontosDeColeta", JSON.stringify(LocaisPadrao));
      setPontosDeColeta(
        LocaisPadrao.filter((ponto) => ponto.usuario.cpf === usuarioLogado.cpf)
      );
    } else {
      const pontosDeColetaDoUsuario = pontosDeColetaSalvos.filter(
        (ponto) => ponto.usuario.cpf === usuarioLogado.cpf
      );
      setPontosDeColeta(pontosDeColetaDoUsuario);
    }
  }, [usuarioLogado]);

const handleDeletarPonto = (id) => {
  const pontosDeColetaSalvos = JSON.parse(localStorage.getItem("pontosDeColeta"));
  const novosPontosDeColeta = pontosDeColetaSalvos.filter((ponto) => !(ponto.id === id && ponto.usuario.cpf === usuarioLogado.cpf));
  localStorage.setItem("pontosDeColeta", JSON.stringify(novosPontosDeColeta));
  const pontosDeColetaDoUsuario = novosPontosDeColeta.filter((ponto) => ponto.usuario.cpf === usuarioLogado.cpf);
  setPontosDeColeta(pontosDeColetaDoUsuario);
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
        <ButtonCustom
          className={styles.buttonCustom}
          type="button"
          texto="Cadastrar Novo"
          onClick={handleCadastrar}
        />
        {pontosDeColeta.length === 0 ? (
          <p>Nenhum ponto de coleta encontrado.</p>
        ) : (
          pontosDeColeta.map((ponto) => (
            <div key={ponto.id} className={styles.card}>
              <h2>{ponto.nome}</h2>
              <p>
                Endereço: {ponto.endereco.logradouro}, {ponto.endereco.numero} -{" "}
                {ponto.endereco.bairro}
                <br />
                {ponto.endereco.cidade} - {ponto.endereco.estado}
              </p>
              <p>Materiais aceitos: {ponto.materiais.join(", ")}</p>
              <ButtonDeletar
                onClick={() => {
                  if (
                    window.confirm(
                      "Tem certeza que deseja deletar este ponto de coleta?"
                    )
                  ) {
                    handleDeletarPonto(ponto.id);
                  }
                }}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default SeusPontosDeColetaPage;
