import { useEffect, useState } from "react"
import './index.scss'

export default function Salario(){
    const [salario, setSalario] = useState()
    const [bonus, setBonus] = useState()
    const [desc, setDesc] = useState()
    const [resposta, setResposta] = useState()

    function Calculo(){
        let cento= (bonus*salario)/100;
        let soma = cento +salario;
        let fim = soma - desc

        setResposta(`Você precisará fazer ${parseInt(fim)} paradas para abastecer`)
    }

    


    return(
        <main className="pagina-salario">
            <div>
            <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))}></input>
            </div>
            <div>
            <input type="number" value={bonus}  onChange={e => setBonus(Number(e.target.value))}></input>
            </div>
            <div>
            <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}></input>
            </div>
            <button onClick={Calculo}> Click </button>
            {resposta}
        </main>
    )
}