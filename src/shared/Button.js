

const Button = ({text , onClick})=>{
  
    
    return(
        <button className = 'header-button'  onClick = {onClick}>
        
        {text}

        </button>
    )
}

export default Button