import React from 'react'
import Header from '../../shared/Header'; 
import Body from '../getProducts/Body'; 
import Footer from '../../shared/Footer';
import { useHistory} from 'react-router-dom';

import {useState , useEffect} from 'react';
export const HomePage = () => {
    const history = useHistory();
    const [products , setProducts] = useState([])
    
    useEffect(()=>{
  
      const getProducts = async () =>{
        const productsFromServer = await fetchProducts();
        setProducts(productsFromServer.data);
      }
  
      getProducts();
    } , [])
  
    let checked = [];
  
    const onCheckBoxChanged = (event) =>{
      const val = event.target.value;
       const index = checked.indexOf(val);  
        if(index > -1)
          checked.splice(index,1) 
        else
          checked.push(val);
        
    }
  
    const fetchProducts = async()=>{
      const res = await fetch('http://localhost:3000/');
      const data = await res.json(); 
      return data;
    }
  
    const onAddProductButtonClicked = ()=>{
      history.push('/addproduct');
    }
    const onDeleteButtonClicked = ()=>{
        const json_ret = {'data' : checked};
        console.log(JSON.stringify(json_ret));
      fetch('http://localhost:3000/deleteproduct.php' , {
        method : 'POST',
        body : JSON.stringify(json_ret)
      }).then( ()=>{
        // checked = [];
        // window.location.reload(false);
      } );
    }
  
    return (
        <div className = 'home-page-container'>
            <Header headerText ='Product List' btn1Text='ADD' btn2Text='MASS DELETE' button1Clicked = {onAddProductButtonClicked} button2Clicked = {onDeleteButtonClicked} button1Id = 'add-product-btn' button2Id = 'delete-product-btn' />
            <Body products = {products} onCheckBoxChanged ={onCheckBoxChanged} />
            <Footer/>
        </div>
    )
}
