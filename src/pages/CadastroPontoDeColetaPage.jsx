import NavigationBar from "../components/organism/NavigationBar";
import LoginBar from "../components/organism/LoginBar";
import ButtonSeta from "../components/atoms/ButtonSeta";
import styles from "./CadastroPontoDeColetaPage.module.css";
import ButtonCustom from "../components/atoms/ButtonCustom";
import { useState } from "react";

function CadastroPontoDeColetaPage() {
 
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [materiais, setMateriais] = useState({
    vidro: false,
    papel: false,
    plastico: false,
    metal: false,
    organico: false,
  });
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    const pontoDeColeta = {
      nome,
      descricao,
      materiais: Object.keys(materiais).filter((material) => materiais[material]),
      endereco: {
        cep,
        logradouro,
        bairro,
        estado,
        cidade,
        numero,
      },
      usuario: {
        cpf: usuarioLogado.cpf,
      },
    };
    const pontosDeColeta = JSON.parse(localStorage.getItem("pontosDeColeta")) || [];
    pontosDeColeta.push(pontoDeColeta);
    localStorage.setItem("pontosDeColeta", JSON.stringify(pontosDeColeta));
    alert("Ponto de coleta cadastrado com sucesso!");
  };

  const handleCepChange = (event) => {
    const cepValue = event.target.value;
    setCep(cepValue);
    if (cepValue.length === 8) {
      fetch("https://viacep.com.br/ws/" + cepValue + "/json/")
      
        .then((response) => response.json())
        .then((data) => {
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setEstado(data.uf);
          setCidade(data.localidade);
        });
    }
  };

  const handleMaterialChange = (event) => {
    setMateriais({ ...materiais, [event.target.name]: event.target.checked });
  };

  const validateForm = () => {
    const errors = {};
    if (!nome) {
      errors.nome = "Nome é obrigatório";
    }
    if (!descricao) {
      errors.descricao = "Descrição é obrigatória";
    }
    if (!Object.keys(materiais).some((material) => materiais[material])) {
      errors.materiais = "Selecione ao menos um material";
    }
    if (!cep || cep.length !== 8) {
      errors.cep = "CEP inválido";
    }
    if (!numero) {
      errors.numero = "Número é obrigatório";
    }
    return errors;
  };

  return (
    <>
      <LoginBar />
      <NavigationBar />
      <div className={styles.container}>
        <h1>Cadastro Ponto De Coleta</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do ponto:
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
            {error.nome && <span style={{ color: "red" }}>{error.nome}</span>}
          </label>
          <label>
            Descrição:
            <textarea value={descricao} onChange={(event) => setDescricao(event.target.value)} />
            {error.descricao && <span style={{ color: "green" }}>{error.descricao}</span>}
          </label>
          <label>
            Materiais:
            <div>
              <label>
                <input type="checkbox" name="vidro" checked={materiais.vidro} onChange={handleMaterialChange} />
                Vidro
              </label>
              <label>
                <input type="checkbox" name="papel" checked={materiais.papel} onChange={handleMaterialChange} />
                Papel
              </label>
              <label>
                <input type="checkbox" name="plastico" checked={materiais.plastico} onChange={handleMaterialChange} />
                Plástico
              </label>
              <label>
                <input type="checkbox" name="metal" checked={materiais.metal} onChange={handleMaterialChange} />
                Metal
              </label>
              <label>
                <input type="checkbox" name="organico" checked={materiais.organico} onChange={handleMaterialChange} />
                Orgânico
              </label>
            </div>
            {error.materiais && <span style={{ color: "red" }}>{error.materiais}</span>}
          </label>
          <label>
            CEP:
            <input type="text" value={cep} onChange={handleCepChange} />
            {error.cep && <span style={{ color: "red" }}>{error.cep}</span>}
          </label>
          <label>
            Logradouro:
            <input type="text" value={logradouro} readOnly />
          </label>
          <label>
            Bairro:
            <input type="text" value={bairro} readOnly />
          </label>
          <label>
            Estado:
            <input type="text" value={estado} readOnly />
          </label>
          <label>
            Cidade:
            <input type="text" value={cidade} readOnly />
          </label>
          <label>
            Número:
            <input type="text" value={numero} onChange={(event) => setNumero(event.target.value)} />
            {error.numero && <span style={{ color: "red" }}>{error.numero}</span>}
          </label>
          <ButtonSeta type="submit" texto="Cadastrar" />
        </form>
      </div>
    </>
  );
}

export default CadastroPontoDeColetaPage;