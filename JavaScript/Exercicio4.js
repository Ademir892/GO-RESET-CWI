vendas = [1100.0, 2500.0, 500.00, 120.00, 450.00];


if(i = 0, i < vendas.length, i++){
    console.log(vendas[i])
}

valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

soma = 0;

while(i = 0, i < valores.length, i++){
        soma += valores[i]
}

media = soma / valores.length;
console.log(media)

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

meuNome = ""
nomeComun = "false"

for( i = 0; i < nomesComuns.length; i++){
    if(meuNome == nomesComuns[i]){
        nomeComun = true
    }
    else{}
}
if (nomeComum == true) {
    console.log("É, nome comum :P")
} else {
    console.log("Diferentão, hein? XD")
}