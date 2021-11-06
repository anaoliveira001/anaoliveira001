 function soma(a:number, b:number): number {
   return a+b;
 }
//soma('ola', 5); doesent work, need to be a number to code works
soma(2, 5);
function imprime(x:boolean[]){

};
function soma2(a,b){
  return a+b;
}
soma2('olá',3);
let x =5;

soma(x,4);
function cadastraAluno(aluno: Aluno){

}


cadastraAluno({matricula:123, nome: 'Ana', dataNascimento: '1990/01/27'});

interface Aluno {
  matricula: number,
  nome: string,
  dataNascimento: string
}
let aluno2 ={
  matricula: 123,
  nome: 'Ana',
  dataNascimento: '1990/01/27',
  turma: 3
}

cadastraAluno(aluno2);