const jogadores = [
  { nome: "Ana", pontos: 120 },
  { nome: "Carlos", pontos: 200 },
  { nome: "Beatriz", pontos: 150 }
];

const ranking = jogadores
  .sort((a, b) => b.pontos - a.pontos)
  .map((jogador, i) => `${i + 1}º ${jogador.nome} - ${jogador.pontos} pontos`);

console.log(ranking.join('\n'));
