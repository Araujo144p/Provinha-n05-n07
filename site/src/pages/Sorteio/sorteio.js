const readLine = require('prompt-sync')();
function Sorteio( quantidade, tentativas){
    let numero = parseInt(Math.random() * 1000)
    console.log('insira o valor')
    for(let i = 1; i  <= quantidade ; i++){
        let chute = readLine();
        if(chute == numero){
            console.log('acertou')
            break
        }
        else if(chute < numero){
            console.log('Maior !! ' )
        }
        else{
            console.log('Menor !! ' )
        }
        
    }
    console.log(numero)

}
function Main(){
    Sorteio(10)
}
Main();