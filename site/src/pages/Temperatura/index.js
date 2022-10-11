import { useEffect, useState } from 'react'
import './index.scss'


export default function Temperatura(){

    const [temp, setTemp] = useState()
    const [resposta, setResposta] = useState()

    
    function febre(){
        let msg = ''
        if(temp < 36){
            msg = "Hiportemia"
        }
        else if(temp >= 36 && temp <= 37.5)
        msg = "Normal"
        else if(temp >= 37.6 && temp < 39.6)
        msg ="Febre"
        else if( temp >= 39.6 && temp < 41)
        msg ="Febre alta"
        else if( temp >= 41)
        msg = "Hipertemia"

        setResposta(`A situação para a sua temperatura é ${msg}`)
    }

    useEffect(()  =>{
        febre()
    }, [temp])
    return(
        <main>
            <div>
                <input type="number" value={temp} onChange={e => setTemp(e.target.value)}></input>
            </div>
            <div>

                <button onClick={febre}>Click</button>
                {resposta}
            </div>
        </main>
    )
}