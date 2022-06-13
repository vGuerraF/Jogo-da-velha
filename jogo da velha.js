const prompt = require(`prompt-sync`)();
console.clear();

let contador1 = 0;
let contador2 = 0;

jogo: while (true) {
  let coluna1 = [];
  let coluna2 = [];
  let coluna3 = [];
  let linhas = [];
  let retornar;
  let empate = 0;

  for (i = 0; i < 3; i++) {
    coluna1.push(`_`);
    coluna2.push(`_`);
    coluna3.push(`_`);
  }
  linhas.push(coluna1, coluna2, coluna3);

  while (true) {
    console.clear();

    console.log(`
        Jogador1(X) - ${contador1} ponto(s)
        Jogador2(O) - ${contador2} ponto(s)\n`);

    for (a of linhas) {
      console.log(a);
    }

    console.log();
    console.log(`Vez do jogador1(X):`);
    let perguntaA1 = +prompt(`Qual a linha? `);
    let perguntaB1 = +prompt(`Qual a coluna? `);
    console.log();
    while (perguntaA1 > 3 || perguntaA1 < 1 || perguntaB1 > 3 || perguntaB1 < 1) {
      console.log(`\nValor da coluna ou linha invalida`);
      perguntaA1 = +prompt(`Qual a linha? `);
      perguntaB1 = +prompt(`Qual a coluna? `);
    }

    estrutura1(perguntaA1, perguntaB1);

    function estrutura1(a, b, x = `X`) {
      if (linhas[a - 1][b - 1] == `X` || linhas[a - 1][b - 1] == `O`) {
        console.log();
        console.log(`Posiçâo já preenchida. Escolha uma posiçâo vazia.`);
        perguntaA1 = +prompt(`Qual a linha? `);
        perguntaB1 = +prompt(`Qual a coluna? `);
        estrutura1(perguntaA1, perguntaB1);
      } else {
        empate++
        let colocarX = (linhas[a - 1][b - 1] = x);

        return colocarX;
      }
    }
    for (i = 0; i < 3; i++) {
        
      if (
        (linhas[i][0] == `X` && linhas[i][1] == `X` && linhas[i][2] == `X`) ||
        (linhas[0][i] == `X` && linhas[1][i] == `X` && linhas[2][i] == `X`) ||
        (linhas[0][0] == `X` && linhas[1][1] == `X` && linhas[2][2] == `X`) ||
        (linhas[0][2] == `X` && linhas[1][1] == `X` && linhas[2][0] == `X`)
      ) {
        contador1++;
        console.clear();

        console.log(`
        Jogador1(X) - ${contador1} ponto(s)
        Jogador2(O) - ${contador2} ponto(s)\n`);
        for (a of linhas) {
          console.log(a);
        }
        console.log();
        console.log(`Vitória do jogador1!`);
        retornar = prompt(`Quer continuar a jogar? `).toLowerCase();
        if (retornar == `sim`) {
          continue jogo;
        } else {
          if(contador1 > contador2) {
          console.log(`\nO jogador 1 venceu com ${contador1} ponto(s)\n`);
          break jogo;
        } else if(contador2 > contador2){
          console.log(`\nO jogador 2 venceu com ${contador2} ponto(s)\n`);
          break jogo;
        } else{
          console.log(`\nOS jogadores empataram! Ambos com ${contador1} ponto(s)\n`)
        }
        break jogo;
      }
       } else if (empate == 5){
        console.clear();

        console.log(`
        Jogador1(X) - ${contador1} ponto(s)
        Jogador2(O) - ${contador2} ponto(s)\n`);
        for (a of linhas) {
          console.log(a);
        }
        console.log();
        console.log(`A partida terminou em EMPATE!`);
        retornar = prompt(`Quer continuar a jogar? `).toLowerCase();
        if (retornar == `sim`) {
          continue jogo;
        } else {
          console.log(`O jogador 1 venceu com ${contador1} ponto(s)\n`);
          break jogo;
        }
      }
    }

    console.clear();

    console.log(`
        Jogador1(X) - ${contador1} ponto(s)
        Jogador2(O) - ${contador2} ponto(s)\n`);

    for (a of linhas) {
      console.log(a);
    }

    console.log();
    console.log(`Vez do jogador2(O):`);
    let perguntaA2 = +prompt(`Qual a linha? `);
    let perguntaB2 = +prompt(`Qual a coluna? `);
    console.log();
    while (perguntaA2 > 3 || perguntaA2 < 1 || perguntaB2 > 3 || perguntaB2 < 1) {
      console.log(`\nValor da coluna ou linha invalida`);
      perguntaA2 = +prompt(`Qual a linha? `);
      perguntaB2 = +prompt(`Qual a coluna? `);
    }

    estrutura2(perguntaA2, perguntaB2);

    function estrutura2(a2, b2, o = `O`) {
      if (linhas[a2 - 1][b2 - 1] == "X" || linhas[a2 - 1][b2 - 1] == "O") {
        console.log();
        console.log(`Posiçâo já preenchida. Escolha uma posiçâo vazia.`);
        perguntaA2 = +prompt(`Qual a linha? `);
        perguntaB2 = +prompt(`Qual a coluna? `);
        estrutura2(perguntaA2, perguntaB2);
      } else {
        let colocarO = (linhas[a2 - 1][b2 - 1] = o);

        return colocarO;
      }
    }
    for (i = 0; i < 3; i++) {
        
      if (
        (linhas[i][0] == `O` && linhas[i][1] == `O` && linhas[i][2] == `O`) ||
        (linhas[0][i] == `O` && linhas[1][i] == `O` && linhas[2][i] == `O`) ||
        (linhas[0][0] == `O` && linhas[1][1] == `O` && linhas[2][2] == `O`) ||
        (linhas[0][2] == `O` && linhas[1][1] == `O` && linhas[2][0] == `O`)
      ) {
        contador2++;
        console.clear();

        console.log(`
        Jogador1(X) - ${contador1} ponto(s)
        Jogador2(O) - ${contador2} ponto(s)\n`);
        for (a of linhas) {
          console.log(a);
        }
        console.log();
        console.log(`Vitória do jogador2!`);
        retornar = prompt(`Quer continuar a jogar? `).toLowerCase();
        if (retornar == `sim`) {
          continue jogo;
        } else {
            if(contador1 > contador2) {
            console.log(`\nO jogador 1 venceu com ${contador1} ponto(s)\n`);
            break jogo;
          } else if(contador2 > contador2){
            console.log(`\nO jogador 2 venceu com ${contador2} ponto(s)\n`);
            break jogo;
          } else{
            console.log(`\nOS jogadores empataram! Ambos com ${contador1} ponto(s)\n`)
          }
          break jogo;
        }
      }
    }
  }
}
