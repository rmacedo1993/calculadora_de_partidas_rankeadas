let quantVitorias = 45
let quantDerrotas = 15
let calculoRankeadas = (quantVitorias - quantDerrotas);

function calculadoraRnkd(valor){
	switch (true) {
    	case (calculoRankeadas < 10):
        	rankedCalculator = "Ferro";
            break;
        case (calculoRankeadas >= 11 && calculoRankeadas <= 20):
        	rankedCalculator = "Bronze";
            break;
        case (calculoRankeadas >= 21 && calculoRankeadas <= 50):
        	rankedCalculator = "Prata";
            break;
        case (calculoRankeadas >= 51 && calculoRankeadas <= 80):
        	rankedCalculator = "Ouro";
            break;
        case (calculoRankeadas >= 81 && calculoRankeadas <= 90):
        	rankedCalculator = "Diamante";
            break;
        case (calculoRankeadas >= 91 && calculoRankeadas <= 100):
        	rankedCalculator = "Lendário";
            break;
        case (calculoRankeadas >= 101):
        	rankedCalculator = "Imortal";
            break;
		default:
        console.log("nenhuma opcao encontrada");
        break;
}        
console.log("O Herói tem saldo de **"+quantVitorias+"** vitórias e está no nível **"+rankedCalculator+"**");
}
  
calculadoraRnkd(calculoRankeadas)