import { useEffect, useState } from 'react'
import './index.scss'

export default function Juros(){
    const [entrada, setEntrada] = useState(0)
    const [capital, setCapital] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [periodo, setPeriodo] = useState(0)
    const [resposta, setResposta] = useState(0)

    function composto(){
        try{
        let c =  capital -entrada 
        let i = taxa/100
        let soma = 1+i
        let math = Math.pow(soma, periodo)
        let tempo = taxa * 12
        let semimontante = c*math
        let montante = semimontante
        let juros =  montante - capital
        let parcela = montante/(tempo)

        setResposta(`Montante é igual a ${montante.toFixed(2)} e o juros é igual a ${juros.toFixed(2)} valor da parcela ${parcela. toFixed(2)}`)
        }
        catch(err){
            setResposta(err.message)
        }
        
    }

    useEffect(() =>{
        composto()
    },[entrada, capital, taxa, periodo])



    return(
        <main>
            <h1>Juros Composto</h1>
            <div>
                <input type="number" value={entrada} onChange={e => setEntrada(e.target.value)} ></input>
                <label>Entrada</label>
            </div>
            <div>
                <input type="number" value={capital} onChange={e => setCapital(e.target.value)} ></input>
                <label>capital</label>
            </div>
            <div>
                <input type="number" value={taxa} onChange={e => setTaxa(e.target.value)} ></input>
                <label>taxa(anual)</label>
            </div>
            <div>
                <input type="number" value={periodo} onChange={e => setPeriodo(e.target.value)} ></input>
                <label>periodo em anos</label>
            </div>
            <div>
                <button onClick={composto}>CLICK</button>
                {resposta}
            </div>
        </main>
    )
}