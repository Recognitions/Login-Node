function Input(props){
    return(
        <input 
            type={props.type} 
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}

export default Input