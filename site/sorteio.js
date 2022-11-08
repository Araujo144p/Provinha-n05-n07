const readLine = require('prompt-sync')();
function Sorteio(numero, quantidade){

    for(let i = 0; i  <= quantidade ; i++){
        console.log(i)
        let chute = readLine();
        if(chute == numero){
            console.log('acertou')
        }
        else if(chute < numero){
            console.log('Numero maior !!')
        }
        else{
            console.log('Numero Menor !!')
        }

    }
}
function Main(){
    Sorteio(12,21)
    console.log()

}
Main();