import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import FormInput from '../../shared/FormInput'
import '../../styles/input_form.css'
import '../../styles/combobox.css'
import Select from 'react-select'
import {useEffect , useState} from 'react'
import React from 'react'
import * as ReactDOM from 'react-dom/client';
const AddProducts = () => {
    const [products , setProducts] = useState([])


    useEffect(()=>{
        const getProducts = async () =>{
          const productsFromServer = await fetchProducts();
          setProducts(productsFromServer.data);
        }
    
        getProducts();
      } , [])
      
      const getProcessedProducts = () =>{
        let proccessed = [];
          let temp = Object;
          for( const key in products){
            temp = {
               'value' : key,
               'label' : key
            }
            proccessed.push(temp);
          }
          return proccessed;
      }

      const fetchProducts = async()=>{
        const res = await fetch('http://localhost:3000/products.php');
        const data = await res.json(); 
        return data;
      }

      const onChange = (event) => {
        const value = event.value;
        const root = document.getElementById('product-feilds');
        const reactRoot = ReactDOM.createRoot(root);
       
        let elements = [];
        products[value].map( (v)=>{
          const element = <div className = {v} style ={{ marginLeft :'80px' , marginTop :'20px',display:'grid' , gridTemplateColumns : '90px 250px' , alignItems:'center'}}> 
          <div>
              <label style={{fontSize : '20px' } }> {v} </label>
          </div>
          <div>
              <input  style = {{fontSize:'20px'}} type = 'text' placeholder = {v}/>
          </div>
      </div>
          elements.push(element); 
        }  )

        reactRoot.render(elements);
        
      };  

    return (
         <div>
             <Header headerText ='Product Add' btn1Text='Save' btn2Text='Cancel'/>

            <div className = 'product_form'>
                  <form >
                      <FormInput feild_name = 'SKU' placeHolder ='add product sku' id = 'sku-feild'/>
                      <FormInput feild_name = 'Name' placeHolder ='add product name' id = 'name-feild' />
                      <FormInput feild_name = 'Price ($)' placeHolder ='add product price' id = 'price-feild' />
                  </form>
            </div>
                 <div className = 'combobox' >
                   <div>
                     Type Switcher
                   </div>
                   <div >
                    <Select
                      options = { getProcessedProducts()}
                      onChange = {onChange}
                    />
                    
                 </div>
              </div>

              <div id = 'product-feilds'  ></div>
             <Footer/>
        </div>
    )
}

export default AddProducts
