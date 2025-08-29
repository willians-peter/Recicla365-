import ButtonCustom from "../components/atoms/ButtonCustom";
import styles from "./CadastroPage.module.css";
import MundoRecicle from "../assets/MundoRecicle.jpeg";
import NavigationBar from "../components/organism/NavigationBar"; 


function CadastroPage() {
  const handleDateChange = (event) => {
    const date = event.target.value.replace(/\D+/g, '');
    const formattedDate = date.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    event.target.value = formattedDate;
  };

  const handleCpfChange = (event) => {
    const cpf = event.target.value.replace(/\D+/g, '');
    const formattedCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    event.target.value = formattedCpf;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const genero = event.target.genero.value;
    const email = event.target.email.value;
    const cpf = event.target.cpf.value.replace(/\D+/g, '');
    const dataNascimento = event.target.dataNascimento.value;
    const senha = event.target.senha.value;
    const confirmarSenha = event.target.confirmarSenha.value;

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExistente = usuarios.find((usuario) => usuario.cpf === cpf || usuario.email === email);

    if (usuarioExistente) {
      alert("CPF ou email já cadastrado");
      return;
    }

    const novoUsuario = {
      id: cpf,
      nome,
      genero,
      email,
      cpf,
      dataNascimento,
      senha,
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");
    window.location.href = '/';
  };

  return (
    <>
    <NavigationBar />
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={MundoRecicle} alt="Imagem do globo terrestre com enfase na natureza" />
      </div>
      <div className={styles.loginForm}>
        <h2>Bem Vindo!</h2>
        <h1>Criar Conta</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome Completo:</label>
          <input type="text" name="nome" placeholder="Nome Completo" required />
          <br />
          <label>Gênero:</label>
          <select name="genero" required>
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <br />
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" required />
          <br />
          <label>CPF:</label>
          <input type="text" name="cpf" placeholder="000.000.000-00" onChange={handleCpfChange} required />
          <br />
          <label>Data de Nascimento:</label>
          <input type="text" name="dataNascimento" placeholder="dd/mm/aaaa" onChange={handleDateChange} required />
          <br />
          <label>Senha:</label>
          <input type="password" name="senha" placeholder="Senha" required />
          <br />
          <label>Confirmar Senha:</label>
          <input type="password" name="confirmarSenha" placeholder="Confirmar Senha" required />
          <br />
          
          <ButtonCustom type="submit" texto="Cadastrar" />
        </form>
      </div>
    </div>
    </>
  );
}

export default CadastroPage;