function imprimir(i){
    console.log(i)
}
//Questao 1
function mesmoNome(nomeDoFulamo, nomeDoBeltrano){
        if(nomeDoFulamo == nomeDoBeltrano){
            return true
        }
        else{
            return false
        }
}
//Questao 2
function maiorDeIdade(idade){
    if(idade < 18){
        return "Menor de Idade"
    }
    else{
        return "Maior de Idade"
    }
}

//Questao 3
function jurosPorAtraso(valorBoleto, acrescimo){
    return valorBoleto * acrescimo
}

//Questao 4
function mediaAritmetica(itens){
    soma = 0

    for(i = 0; i < itens.length; i++){
        soma += itens[i]
    }
    return soma / itens.length
}

//Questao 5
function margemBruta(receitaLiquida, custosDosProdutosVendidos){
    lucroBruto = receitaLiquida - custosDosProdutosVendidos;
    resultadoFinal = (lucroBruto / receitaLiquida) * 100;
    return(resultadoFinal)
}