//Programação Imperativa

//Avaliação Final 
//Objetivos

//Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar um pouco com exercícios que dependem da etapa anterior para manter uma linha de trabalho.
//Importante: Ao final, lembre-se de enviar o código completo para o Github, compartilhando o link do projeto com seus professores.


//1) - Passo 1 (1,5 pontos)

//Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 

class ListaNovoAluno {
  constructor(nome, qtdFalta, notas) {
    this.nome = nome;
    this.qtdFalta = qtdFalta;
    this.notas = notas;

  }


  //2) -Passo 2 (1,5 pontos)
  //Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas,
  // que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 

  calcularMedia() {
    let somaNota = 0;

    for (let i = 0; i < this.notas.length; i++) {
      somaNota = somaNota + this.notas[i];
    };
    return soma / this.notas.length;

  }



  somarfaltas() {
    this.qtdFalta = this.qtdFalta + 1;


    return this.qtdFalta;

  };
}






const novoAluno1 = new ListaNovoAluno('José Silva dos Santos', 2, [4.8, 8.5, 6.9]);
const novoAluno2 = new ListaNovoAluno('Paulo José', 5, [6.8, 7.5, 6.2]);
const novoAluno3 = new ListaNovoAluno('Marcos Peixoto', 1, [9.8, 7.2, 7.9]);
const novoAluno4 = new ListaNovoAluno('Caio Azevedo', 2, [5.9, 9.5, 4.9]);
const novoAluno5 = new ListaNovoAluno('Marcelo Xavier', 2, [8.8, 6.5, 7.2]);


//3) -Passo 3 (1,5 pontos)
//crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number),
// e uma lista de estudantes (um array composto pelos alunos criados no passo 2).

let curso = {

  nomeCurso :"DH",
  notaDeAprovacao : 6,
  faltasMaximas: 3,
  listaDeEstudantes : [novoAluno1, novoAluno2, novoAluno3, novoAluno4, novoAluno5],
  incluirAluno: function () {

    console.log(this.listaDeEstudantes);

    
  },



};




//4) -Passo 4 (1,5 pontos)
//Crie o métodoque permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
// deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.





//5) -Passo 5 (2 pontos)
//Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação.
// Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas.
// Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação


let novoAluno = Object.create(curso);
novoAluno.listaDeEstudantes = 'novoAluno6';
novoAluno.incluirAluno();



// 6) -Passo 6 (2 pontos)

//Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
function mostrarAluno() {

  return ListaNovoAluno.sort(function (A, B) {
    return B.nome === A.nome == this.notaDeAprovacao > 6;


  });


};







function mostrarNota() {


  return ListaNovoAluno.sort(function (a, b) {
    return b.notas - a.notas ;
  
  });



};
ListaNovoAluno();
console.log(mostrarNota());

console.log(mostrarAluno());


console.log(novoAluno1);

console.log(curso);


console.log(ListaNovoAluno.mostrarNota);























































