import { Link } from "react-router-dom";
import NavigationBar from "../components/organism/NavigationBar";
import LoginBar from "../components/organism/LoginBar";
import styles from "./DashBoard.module.css";
import { useState, useEffect } from "react";

const materiaisReciclaveis = ["Vidro", "Papel", "Plástico", "Metal", "Organico"];

function DashBoardPage() {
  const [pontosDeColeta, setPontosDeColeta] = useState([]);
  const [materialSelecionado, setMaterialSelecionado] = useState(null);
  const [pontosDoMaterial, setPontosDoMaterial] = useState([]);

  useEffect(() => {
    const pontosDeColetaSalvos = JSON.parse(localStorage.getItem("pontosDeColeta"));
    if (pontosDeColetaSalvos) {
      setPontosDeColeta(pontosDeColetaSalvos);
    }
  }, []);

  const handleMaterialClick = (material) => {
    setMaterialSelecionado(material);
    const pontos = filtrarPontosPorMaterial(pontosDeColeta, material);
    setPontosDoMaterial(pontos);
  };

  const filtrarPontosPorMaterial = (pontos, material) => {
    const materialLower = material.toLowerCase();
    return pontos.filter((ponto) => ponto.materiais.includes(materialLower));
  };

  const formatarEndereco = (ponto) => {
    return `${ponto.endereco.logradouro}, ${ponto.endereco.numero} - ${ponto.endereco.bairro}, ${ponto.endereco.cidade} - ${ponto.endereco.estado}`;
  };

  return (
    <>
      <LoginBar />
      <NavigationBar />
      <div className={styles.container}>
        <h1>Pontos De Coleta</h1>
        <div className={styles.cardsContainer}>
          {materiaisReciclaveis.map((material, index) => (
            <div key={index} className={styles.card} onClick={() => handleMaterialClick(material)}>
              <h2>{material}</h2>
              <p>Quantidade de pontos: {filtrarPontosPorMaterial(pontosDeColeta, material).length}</p>
            </div>
          ))}
        </div>
        {materialSelecionado && (
          <div className={styles.listaPontos}>
            <h2>Pontos que aceitam {materialSelecionado}</h2>
            <ul>
              {pontosDoMaterial.map((ponto, index) => (
                <li key={index}>{ponto.nome} - {formatarEndereco(ponto)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DashBoardPage;