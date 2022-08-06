const Button=(props) =>{

    return(
        <button onClick={props.handleClick} style={{color: props.color,background:props.background}}>
            {props.label}
        </button>
    
    )
}

export default Button