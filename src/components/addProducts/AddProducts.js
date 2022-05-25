import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import FormInput from '../../shared/FormInput'
import '../../styles/input_form.css'
const AddProducts = () => {
    return (
         <div>
             <Header headerText ='Product Add' btn1Text='Save' btn2Text='Cancel'/>

             <form className = 'product_form'>
                 
                 <FormInput feild_name = 'SKU' placeHolder ='add product sku' id = 'sku-feild'/>
                 <FormInput feild_name = 'Name' placeHolder ='add product name' id = 'name-feild' />
                 <FormInput feild_name = 'Price ($)' placeHolder ='add product price' id = 'price-feild' />
                 </form>
             <Footer/>
        </div>
    )
}

export default AddProducts
