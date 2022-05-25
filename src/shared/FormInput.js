
const FormInput = ({feild_name , placeHolder , id}) => {
    return (
        <div className = {id} style ={{display:'grid' , gridTemplateColumns : '90px 250px' , alignItems:'center'}}> 
            <div>
                <label style={{fontSize : '20px' } }> {feild_name} </label>
            </div>
            <div>
                <input  style = {{fontSize:'20px'}} type = 'text' placeholder = {placeHolder}/>
            </div>
        </div>
    )
}

export default FormInput
