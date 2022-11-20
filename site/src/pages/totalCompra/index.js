export default function Compra(){

    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resposta, setResposta] = useState();

    function click(){
        try {
            if (parseInt(inteiras) != parseFloat(inteiras) || parseInt(meias) != parseFloat(meias)) throw new Error("valor inválido")
            if (inteiras < 0 || meias < 0) throw new Error("Valor Inválido");
            if (!isNaN(diaSemana)) throw new Error("Dia da semana inválido")
    
            let d = diaSemana.toLowerCase();
            let x = (inteiras * 28.5) + (meias * 14.25);
            if (nacional == true) x = (inteiras * 5) + (meias * 5);
            else if (d == "quarta-feira") x = (inteiras * 14.25) + (meias * 14.25);
    
            setResposta(x);
        } catch (err) {
            setResposta(err.message);
        }
    }
    return(
        <div>
            <h1>Compra</h1>
            <p>inteiras: <input type="number" value={inteiras} onChange={e=> setInteiras(e.target.value)} /></p>
            <p>meias: <input type="number" value={meias} onChange={e=> setMeias(e.target.value)} /></p>
            <p>semana: <input type="text" value={diaSemana} onChange={e=> setDiaSemana(e.target.value)} /></p>
            <p>Nacional: <input type="checkbox" value={nacional} onChange={e => setNacional(e.target.checked)} /></p>
            <button onClick={click}>Calcular</button>
            <h4>{resposta}</h4>
        </div>
    )
}