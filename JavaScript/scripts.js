nomeCompleto = "Ademir Marmitt Traesel";
apelido = "Ade";
idade = 24;
dataNascimento = "04/08/1998";
localNascimento = "Dois Irmaos";
altura = 1.91;
trabalhando = true

apresentacao = "Meu nome é " 
+ nomeCompleto 
+ "sou conhecido como " 
+ apelido + " e tenho " 
+ idade + " anos. Nasci no dia " 
+ dataNascimento 
+ ", na cidade de " 
+ localNascimento 
+ ". Tenho " 
+ altura 
+ " m de altura e atualmente estou " 
+ (trabalhando ? "empregado" : "desempregado") 
+ ".";

console.log(apresentacao);