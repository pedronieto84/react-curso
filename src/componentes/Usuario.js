const Usuario = (props) =>{
    return (
        <>
            <p> {  props.usuario.nombre } : 
           { props.usuario.edad }</p>
        </>
    )
}

export default Usuario