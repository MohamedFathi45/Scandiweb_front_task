import '../styles/header.css'
import Button from '../shared/Button'


const Header = () => {

    const onAddButtonClicked = ()=>{
        console.log('Add button clicked');
    }

    const onDeleteButtonClicked = () =>{
        console.log('Delete button clicked');
    }

    return (
        <header>
            <div className = 'header'>

                <div className = 'header-text'>
                    Product List
                    </div>

                <div className = 'right-part'>

                    <div className = 'add-button-div'>
                    <Button  text = 'ADD' onClick = {onAddButtonClicked} />
                    </div>

                    <div className = 'delete-button-div'>
                    <Button  text = 'MASS DELETE' onClick = {onDeleteButtonClicked} />
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header
