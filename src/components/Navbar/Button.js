const Button=(props) =>{

    return(
        <button style={{color: props.color,background:props.background}}>{props.label}</button>
    )
}

export default Button