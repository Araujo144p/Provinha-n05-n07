import { useState } from 'react'
import './index.scss'


export default function Aluno(){
    const [qtdaluno, setAQtldaluno] = useState(0)
    const [ notas , setNotas] = useState(0)
    const [resposta1, setResposta1] = useState([])
    const [calculo, setCalculo] = useState([])
    let array = []

    function alunos(){
        let array = []
        for(let cont= 1; cont <= qtdaluno; cont++){
            array[cont]= cont
        }
        setResposta1(array)
    }

    function media(){

    }

    return(
        <main>
            <div>
                <input type="number" value={qtdaluno} onChange={e => setAQtldaluno(e.target.value)}></input>
                <button onClick={alunos}>Click</button>
            </div>
            {resposta1.map((item, index) =>(
                <div>aluno {item} <input type="number" value={notas[index]} onChange={e =>{

                    array[index]= Number(e.target.value)
                    console.log(array)
                }}/></div>
                ))
                }


                <div>
                    <button>CLICK</button>
                </div>
        </main>
    )
}