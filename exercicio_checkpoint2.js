//Programação Imperativa

//Avaliação Final 
//Objetivos

//Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar um pouco com exercícios que dependem da etapa anterior para manter uma linha de trabalho.
//Importante: Ao final, lembre-se de enviar o código completo para o Github, compartilhando o link do projeto com seus professores.


//1) - Passo 1 (1,5 pontos)

//Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 



let aluno = {
  nome: '',
  quantidadeFaltas: 0,
  notas: [],
  construtor: function (nome, faltas, notas) {
    this.nome = nome;
    this.qtdfaltas = faltas;
    this.notas = notas;
  },


  

}


//2) -Passo 2 (1,5 pontos)
//Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas,
// que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 


calcularMedia = function (aluno) {
  let total = 0;

  aluno.notas.forEach(nota => {
    total += nota;
  })

  return total / aluno.notas.length;
}
aumentarFaltas = function (aluno) {
  aluno.quantidadeFaltas++;

  let Luiz = new aluno.construtor('Luiz', 0, [7, 10, 9]);
  aluno.aumentarFaltas(Luiz);
  
  
  let Maria = new aluno.construtor('Maria', 0, [5, 5, 5]);
  aluno.aumentarFaltas(Maria);
  
  let Ana = new aluno.construtor('Ana', 0, [7, 7, 7]);
  aluno.aumentarFaltas(Ana)
  
  let Marcio = new aluno.construtor('marcio', 0, [0, 5, 7]);
  aluno.aumentarFaltas(Marcio);



 
  
  

};











//3) -Passo 3 (1,5 pontos)
//crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number),
// e uma lista de estudantes (um array composto pelos alunos criados no passo 2).



let curso = {
  nomeCurso: 'Javascriptzão',
  notaAprovação: 7,
  faltasMaximas: 2,
  listaEstudantes: [
    estudante.Luiz,
    estudante.Ana,
    estudante.Maria,
    estudante.Marcio,
  ],



  //4) -Passo 4 (1,5 pontos)
  //Crie o métodoque permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
  // deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

  adicionarAluno: function (nome, faltas, notas) {
    this.listaEstudantes.push(aluno.construtor(nome, faltas, notas));
  },

  //5) -Passo 5 (2 pontos)
  //Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação.
  // Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
  // Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação

  aprovacao: function (estudante) {
    const media = aluno.calcularMedia(estudante);

    if (
      media >= this.notaAprovacao &&
      estudante.quantidadeFaltas < this.faltasMaximas
    ) {
      return `O estudante ${estudante.nome} foi aprovado`;
    } else if (
      estudante.quantidadeFaltas === this.faltasMaximas &&
      mídia > this.notaAprovação * 1.1
    ) {
      return `O estudante ${estudante.nome} foi aprovado com ressalvas`;
    } else {
      return `O estudante ${estudante.nome} foi reprovado`;
    }
  },


  //Passo 6 (2 pontos)
  //Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
  listaAprovados: function () {
    let todos = [];

    this.listaEstudantes.forEach(estudante => {
      todos.push(this.aprovacao(estudante)); _
    });

    return todos;
  }
}

curso.adicionarAluno('José', 0, [7, 5, 7]);

let aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
  console.log(aprovado);
});









/*console.log(curso.calcularMedia());
console.log(curso.NotaFinal());
console.log(curso.somarfaltas());
console.log(curso.mediaFinal());*/







/*console.log(novoAluno1);
console.log(novoAluno2);
console.log(novoAluno3);
console.log(novoAluno4);
console.log(novoAluno5);*/





console.log(curso);











































