import '../styles/header.css'
import Button from '../shared/Button'


const Header = ({headerText , btn1Text , btn2Text}) => {

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
                    {headerText}
                    </div>

                <div className = 'right-part'>

                    <div className = 'header-button'>
                    <Button  text = {btn1Text} onClick = {onAddButtonClicked} />
                    </div>

                    <div className = 'header-button'>
                    <Button id='delete-product-btn' text = {btn2Text} onClick = {onDeleteButtonClicked} />
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header
