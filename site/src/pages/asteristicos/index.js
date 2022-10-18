import { useState } from "react"

export default function Asteristicos(){
    const [qlt, setQlt] = useState()
    const [resposta, setResposta] = useState([])

    function click(){
 
        let array = []
        for(let cont = 1; cont <= qlt; cont++){
            array[cont]= "* "
        }
        setResposta(array)
    }

    return(
        <main>
        <div>
            <input type="number" value={qlt} onChange={e=> setQlt(e.target.value)}></input>
        </div>
        <div>
            <button onClick={click}>CLICK</button>
            {resposta}
        </div>
        </main>
    )
}