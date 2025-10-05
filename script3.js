function selecionarTema() {
  const escolha = parseInt(document.getElementById("tema").value);
  const mensagem = document.getElementById("mensagem");
  let tema;
  let incentivo;

  switch (escolha) {
    case 1:
      tema = "Desenvolvimento Web";
      incentivo = "Explore HTML, CSS e JavaScript para criar sites incríveis!";
      break;
    case 2:
      tema = "Inteligência Artificial";
      incentivo = "Aprofunde-se em algoritmos e machine learning para transformar dados em soluções inteligentes!";
      break;
    case 3:
      tema = "Jogos Digitais";
      incentivo = "Use sua criatividade para desenvolver experiências interativas e divertidas!";
      break;
    case 4:
      tema = "Aplicativos Mobile";
      incentivo = "Domine frameworks como React Native ou Flutter e leve suas ideias para os smartphones!";
      break;
    case 5:
      tema = "Segurança da Informação";
      incentivo = "Proteja sistemas e dados com boas práticas de cibersegurança!";
      break;
    case 6:
      tema = "Banco de Dados";
      incentivo = "Aprenda a organizar, consultar e gerenciar dados com eficiência!";
      break;
    default:
      mensagem.textContent = "Opção inválida. Por favor, escolha um número entre 1 e 6.";
      return;
  }

  mensagem.textContent = `Você escolheu o tema: ${tema}. ${incentivo}`;
}