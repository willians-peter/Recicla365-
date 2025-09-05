# Recicla365 - ReciclaVille

FuturoDEV [JMT] v5 Módulo 1 - Projeto Avaliativo
Desenvolvedor Web Front-end - Joinville Mais Tec

Plataforma web desenvolvida em React com Atomic Design, (simulando) o MPV (Minimum Viable Product) do projeto, desenvolvida para o gerenciamento de pontos de coleta de resíduos recicláveis e orgânicos.

O sistema inícia na tela de login com cinco usuários fictícios cadastrados (UsuariosPadrao.jsx) que é carregado e armazenado no localStorage, sendo eles:"montgomery@usuario.com.br","homer@usuario.com.br","ned@usuario.com.br","moe@usuario.com.br","edna@usuario.com.br",
todos com senha simbólica definida 123.

À opção de cadastrar novo usuário com dados de preenchimento controlado e restrito (não é possível registrar dois e-mail ou cpf iguais).

Após login o usuário tem acesso ao dashboard onde exibe uma lista de cards com todos pontos de coletas cadastrado (por todos os usuários) separados por materiais. Ao clicar nos materiais exibe uma lista com os pontos de coleta desse material, com endereço e mais informações.
Na Navbarlogin exibe o usuário logado, saudação e opção de sair retornando a tela de login, a aba "Seus pontos de coleta" que exibe os pontos de coleta do usuário ativo, criei uma lista padrão que é salva ao primeiro acesso no localStorage caso não possua nenhum registro (mesma situação dos usuariosPadrão.jsx), com locais padrão (LocaisPadrao.jsx) apenas como exemplo de funcionamento, o botão cadastrar novo permite adicionar um ponto de coleta, com formulário controlado e ViaCEP para cadastro do endereço, a opção de deletar o ponto de coleta (cada usuário pode deletar apenas seus pontos cadastrados).

Foi adotado responsividade para diferentes tipos de tela, e proteção das rotas com PrivateRoute.
Poderia ser melhorado com função de editar os pontos de coletas com pontuações dos usuários, um mapa para melhor localização dos locais, proteção de senhas com criptografia e novas páginas exemplificando materias recicláveis e cuidados no descarte.
