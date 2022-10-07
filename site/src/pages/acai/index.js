import { useEffect, useState } from 'react'
import './index.scss'

export default function Index(){
    const [qtdpeq, setQtdpeq] = useState(0)
    const [qtdMedio, setQtdMedio] =  useState(0)
    const [qtdGran, setQtdGran] =  useState(0)
    const [qtddesc, setQtddesc] =  useState(0)
    const [resposta, setResposta] = useState(0)

//throw new Error
    function acai(){
        try{
           
            
            
        let total = (qtdpeq * 13.50) + (qtdMedio*15.00) + (qtdGran*17.50)
        let Desconto = total * qtddesc/100
        let operacao = total - Desconto   
        setResposta((operacao).toFixed(2)) 
        if(qtdpeq <0 || qtdMedio < 0 || qtdGran < 0 || qtddesc < 0 )
        throw new Error (setResposta('Valor inválido'))
        else if(qtddesc > 100){
            throw new Error (setResposta('Desconto inválido'))
        }
        
        
    }
               
        
 catch(err){
            return err.message
        }

    }

    useEffect(() =>{
        acai()
    }, [qtdpeq, qtdMedio, qtdGran, qtddesc])
    return(
        <div>
            <div>
            <label>Pequeno</label>
            <input type="number" value={qtdpeq} onChange={e => setQtdpeq(e.target.value)}></input>
            </div>
            <div>
            <label>Medio</label>
            <input type="number" value={qtdMedio} onChange={e => setQtdMedio(e.target.value)}></input>
            </div>
            <div>
            <label>Grande</label>
            <input type="number" value={qtdGran} onChange={e => setQtdGran(e.target.value)}></input>
            </div>
            <div>
            <label>Desconto</label>
            <input type="number" value={qtddesc} onChange={e => setQtddesc(e.target.value)}></input>
            </div>
            <div>
                o total é {resposta}
            </div>

        </div>
    )
}