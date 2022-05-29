import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import FormInput from '../../shared/FormInput'
import '../../styles/input_form.css'
import '../../styles/combobox.css'
import Select from 'react-select'
import {useEffect , useState} from 'react'
import React from 'react'
import { useHistory} from 'react-router-dom';


const AddProducts = () => {
    const [products , setProducts] = useState([])
    const [options , setOptions] = useState([])
    
    const history = useHistory();
    let generalInputs = {
      "SKU" :"",
      "Name" :"",
      "Price" :""
    };
    let concreteInputs = {};
    let inputCnt = 3;


    useEffect(()=>{
        const getProducts = async () =>{
          const productsFromServer = await fetchProducts();
          setProducts(productsFromServer.data);
        }
    
        getProducts();
      } , [])
      
      const  onGeneralInputChange = (event) =>{
        console.log('insize general change function');
        const feild_name =event.target.name;
        const feild_value = event.target.value.trim();
        console.log(generalInputs[feild_name]);
        console.log(feild_value);
        if(generalInputs[feild_name] === "" && feild_value !== ""){
            console.log('was empty but now not');
            inputCnt --;
        }
        else if(feild_value === "" && generalInputs[feild_name] !== ""){
          console.log('wasnot empty but now empty');
            inputCnt ++;
        }
        generalInputs[feild_name] = event.target.value;
      }

      const onConcreteInputChange = (event) =>{
        const feild_name =event.target.name;
        const feild_value = event.target.value.trime
        if(concreteInputs[feild_name] === "" && feild_value !== "") 
            inputCnt --;
        else if(feild_value === "" && concreteInputs[feild_name] !== "")
            inputCnt ++;
        concreteInputs[feild_name] = event.target.value;
      }

      const optionsJSX = React.createElement( (()=>{
        return (
         options.map((v) => {
            return (
                <>
                 <FormInput feild_name = {v} placeHolder = {v} id = {v} onChange = {onConcreteInputChange}/>
               </>
            )
        
        }))
      }))


      const getProcessedProducts = () =>{
        let proccessed = [];
          let temp = Object;
          for( const key in products){
            temp = {
               'id' : key,
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
        setOptions(products[value]);
        concreteInputs = {};
        console.log('the elements size is');
        inputCnt += products[value].length;
        console.log(inputCnt);
        
      };  

      const onSaveButtonClicked = ()=>{
        // for (const [key, value] of Object.entries(inputs)){
        //   console.log(key);
        //   console.log(value);
        // }
        console.log(inputCnt);
      }
      const onCancelButtonClicked = ()=>{
          history.push('/');
      }

    return (
         <div>
             <Header headerText ='Product Add' btn1Text='Save' btn2Text='Cancel'
              button1Clicked = {onSaveButtonClicked} button2Clicked = {onCancelButtonClicked}/>

            <div className = 'product_form'>
                  <form  id = 'product_form'>
                      <FormInput feild_name = 'SKU' placeHolder ='add product sku' id = 'sku-feild' onChange = {onGeneralInputChange}/>
                      <FormInput feild_name = 'Name' placeHolder ='add product name' id = 'name-feild' onChange = {onGeneralInputChange} />
                      <FormInput feild_name = 'Price' placeHolder ='add product price' id = 'price-feild' onChange = {onGeneralInputChange} />

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
              <div id = 'product-feilds'  >
                {
                  optionsJSX
                }
              </div>

                  </form>
                  
            </div>
                 

             <Footer/>
        </div>
    )
}

export default AddProducts
