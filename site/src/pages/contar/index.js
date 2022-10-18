import { useState } from 'react';
import './index.scss'


export default function Contar(){
    const [inicio, setInicio] = useState(0)
    const [fim, setFim] = useState(0)
    const [resposta, setResposta] = useState([])

    function click(){
        let array = []
        for( let cont = inicio; cont <= fim; cont++){
            array[cont] = cont 
        }
        setResposta(array)
    }

    return(
        <main>

            <div>
                <input type="number" value={inicio} onChange={e=> setInicio(e.target.value)}></input>
                <label>inicio</label>
            </div>
            <div>
                <input type="number" value={fim} onChange={e=> setFim(e.target.value)}></input>
                <label>fim</label>
            </div >
            <button onClick={click}>CLICK</button>
            {resposta.map(item => 
            <div>
               {item}
               </div>
            )}
        </main>
    );
}