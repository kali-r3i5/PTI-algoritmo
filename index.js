console.log('Decida com qual combustível abastecer:\n')

do {
  
var gas = parseFloat(prompt('Preço da Gasolina: '))
var etanol = parseFloat(prompt('Preço do Etanol: '))
var resultado = etanol / gas 

if(resultado  > 0.7){
    console.log('Vale a pena a Gasolina')
  }else if (resultado < 0.7) {
    console.log('Vale a pena Etanol')
  }else {
    console.log('Não faz diferença')
  }

var y = prompt('\nDeseja realizar outra operação? y/n:')
} while (y =='y')
if(y == 'n'){
  console.log('Fim de Programa')
}
