
function round(value) {
    return +value.toFixed(2);
  }

function calcJuros(capital, taxa, tempo) {
    let montanteByMonth = [];
    let montanteAnterior = capital;
    for (let i = 1; i <= tempo; i++) {
        // console.log(montanteByMonth)
        montanteByMonth.push({
            mes: i,
            total: round(capital * (1 + (taxa/100))**i),
            rendimento: round(round(capital * (1 + (taxa/100))**i) - capital),
            porcentagem: round((round(round(capital * (1 + (taxa/100))**i) - capital)*100)/capital)
        })
    }
    return montanteByMonth; 
}

export default {calcJuros}