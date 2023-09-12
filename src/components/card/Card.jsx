import "./Card.css"

function Card(props) {
    return(
        <div className='body-card'>
            <p className="titulo-card">ADVICE #{props.id}</p>
            <p className="cuerpo-card">"{props.advice}"</p>
            <div className="lineal">
                <p className="lineas">-------------------------</p><p className="lineasparalelas">||</p><p className="lineas">-------------------------</p>
            </div>
            
            <button onClick={props.fun}><i class="fa-solid fa-dice-five"></i></button>
        </div>
    )
    
}

export default Card