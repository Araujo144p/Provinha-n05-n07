export default function Orçamento(){
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState();

    function calculo(){
        try {
            if (ganhos <= 0 || gastos <= 0) throw new Error("VALOR INVÁLIDO");
    
            let x = "";
            if (gastos <= 0.2 * ganhos) x = "Parabéns, está gerenciando bem o seu orçamento!"
            if (gastos <= 0.5 * ganhos && gastos >= 0.21 * ganhos) x = "Muito bem, seus gastos não ultrapassam metade dos ganhos!"
            if (gastos <= 0.8 * ganhos && gastos >= 0.51 * ganhos) x = "Atençao, melhor conter os gastos!"
            if (gastos <= ganhos || gastos >= 0.81 * ganhos) x = "Cuidado, seu orçamento pode ficar comprometido!"
            if (gastos > ganhos) x = "Orçamento comprometido! Hora de rever seus gastos!"
    
            setResposta(x)
        } catch (err) {
            setResposta(err.message);
        }
    }

    return(
        <div>
            <p>Ganhos do mês: <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)} /></p>
            <p>Gastos do mês: <input type="number" value={gastos} onChange={e => setGastos(e.target.value)} /></p>
            <button onClick={calculo}> Calcular </button>
            <h4>{resposta}</h4>
        </div>
    )
}