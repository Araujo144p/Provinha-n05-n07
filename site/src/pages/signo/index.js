import { useEffect, useState } from "react"

export default function Signo(){

    const [mes, setMes] = useState('')
    const [dia, setDia] = useState(0)
    const [resposta, setResposta] = useState(false)

  
    function signo(){
        try{

        let valor= ''
        if(mes == "Setembro" && dia >= 23 && dia <= 31 || mes == "Outubro" && dia <=23 )
        valor = 'sim'
        else if(mes !== 'Setembro' || mes !== 'Outubro')
        throw new Error (setResposta('Mes inválido'))
        else{
            valor = 'não'
        }
        setResposta(valor) 
      
      

    }
    catch(err){
        return err.message
    }
}


    useEffect(()=> {
        signo()
    },[mes, dia])

    
    return(
        <main>
            <div>
                <label>
                    Insira o Mês
                </label>
                <input type="text" value={mes} onChange={e => setMes(e.target.value)}></input>
            </div>
            <div>
                <label>insira seu dia</label>
                <input type="number" value={dia} onChange={e => setDia(e.target.value)}></input>
            </div>
            <div>
                {resposta}
            </div>
        </main>
    )
}