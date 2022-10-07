import { useEffect, useState } from "react"

export default function Sorveteriabuttom(){

    const [grama, setGrama] = useState(0)
    const [resposta, setResposta] = useState('')

    function gramas(){
        try{
        let msg = 0
        if(grama < 0){
            msg ='Peso inválido'
        }
        else if(grama < 1000){
            msg = `O total a se pagar é é R$${((grama/100)*3.50).toFixed(2)}`
        }
        else{
            msg = `O total a se pagar é R$${((grama/100)*3).toFixed(2)}`
        }
        setResposta(msg)
    }

catch (err){
    return err.message
}
}

    
    return(
        <div>
            <label>
                Insira as gramas
            </label>
            <input type="number" value={grama} onChange={e =>setGrama(e.target.value )}></input>

            <button onClick={gramas}>Click aqui</button>

            {resposta}
        </div>
    )
}