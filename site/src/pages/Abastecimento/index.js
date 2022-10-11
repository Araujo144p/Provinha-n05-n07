import { useState } from 'react'
import './index.scss'

export default function Abastecimento(){
    const [capac, setCapac] = useState()
    const [consumo, setConsumo] = useState()
    const [dist, setDist] = useState()
    const [resposta, setResposta] = useState()


    function click(){
    setResposta(Math.ceil((dist/capac)/consumo))
    }

    return(
        <main>
            <div>
                <label>Capacidade</label>
                <input type="number" value={capac} onChange={e => setCapac(e.target.value)}></input>
            </div>
            <div>
                <label>Consumo</label>
                <input type="number" value={consumo} onChange={e => setConsumo(e.target.value)}></input>
            </div>
            <div>
                <label>Distancia</label>
                <input type="number" value={dist} onChange={e => setDist(e.target.value)}></input>
            </div>
            <div>
                <button onClick={click}>Click</button>
                {resposta}
            </div>
        </main>
    )
}