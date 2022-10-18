import { useState } from 'react'
import './index.scss'

export default function Retangulo(){

    const [base, setBase] = useState()
    const [altura, setAltura] = useState()
    const [resposta, setResposta] = useState()

    function click(){
        let array = []
        for(let cont = 1; cont <= altura; cont++){
            for(let i = 1; i <=base; i++){
                array[i]="*"
            }
            array[cont]="*"
        }
        setResposta(array)
        
    }

    return(
        <main>
            <input type="number" value={base} onChange={e=> setBase(e.target.value)}></input>
            <label>BASEE</label>
            <input type="number" value={altura} onChange={e=> setAltura(e.target.value)}></input>
            <label>ALTURA</label>
            <div>
                <button onClick={click}>CLICK</button>
            </div>
            {resposta}

        </main>
    )
}