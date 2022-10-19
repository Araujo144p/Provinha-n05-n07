import { useState } from 'react'
import './index.scss'


export default function Cafe(){

    const [qtlaluno, setQtlaluno] = useState(0)
    const [recipiente, setRecipiente] = useState(0)
    const [mililitros, setmililitros] = useState(0)
    const [resposta, setResposta] = useState()

    function click(){
        try{
            let litrostotal = (qtlaluno*mililitros)/1000
            let calma = litrostotal/recipiente
            let as = Math.ceil(calma)*recipiente
            setResposta(as)
    
    
        }
        catch(err){
            setResposta(err.message)
        }
    }

    return(
        <main>
            <h1>
                Eu Quero Caféééé
            </h1>

            <div>
                <input type="number" value={qtlaluno} onChange={e => setQtlaluno(e.target.value)}></input>
                <label>Alunos</label>
            </div>
            <div>
                <input type="number" value={recipiente} onChange={e => setRecipiente(e.target.value)}></input>
                <label>litros max. do recipiente</label>
            </div>
            <div>
                <input type="number" value={mililitros} onChange={e => setmililitros(e.target.value)}></input>
                <label>mililitros pra cada aluno</label>
            </div>
            <div>
                <button onClick={click}>CLICK</button>
                {resposta}
            </div>
        </main>
    )
}