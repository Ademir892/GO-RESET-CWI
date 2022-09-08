imc = peso / (altura * altura);

classificacao = ""

if(imc < 18.5){
    classificacao = "magro";
    grau = 0
}
else if(imc < 25){
    classificacao = "normal";
    grau = 0
}
else if(imc < 30){
    classificacao = "sobrepeso";
    grau = 1
}
else if(imc < 40){
    classificacao = "obesidade";
    grau = 2
}
else {
    classificacao = "obesidade grave";
    grau = 3
}
console.log("Seu IMC é", imc)
console.log("Voce é considerado", classificacao)

if(grau > 0){
    console.log("Cuidado! Voce esta acima do peso recomendado pela OMS.")
}
if(grau == 3){
    console.log("É importante procurar um médico para avaliar sua saúde.")
}