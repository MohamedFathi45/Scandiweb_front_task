import Header from './shared/Header'; 
import Body from './components/getProducts/Body'; 
import Footer from './shared/Footer';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import AddProducts from './components/addProducts/AddProducts';
import {useState , useEffect} from 'react';

function App() {
  const [products , setProducts] = useState([])
  
  useEffect(()=>{

    const getProducts = async () =>{
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer.data);
    }

    getProducts();
  } , [])
  
  const fetchProducts = async()=>{
    const res = await fetch('http://localhost:3000/');
    const data = await res.json(); 
    return data;
  }


  const onAddProductButtonClicked = ()=>{

  }
  const onCancelButtonClicked = ()=>{
  
  }
  return (

    <Router>
      <div className = 'app-container'>
      
      <Switch>
          <Route path = "/addproduct">
              <AddProducts/>
          </Route>
          <Route path = "/">
              <Header headerText ='Product List' btn1Text='ADD' btn2Text='MASS DELETE' button1Clicked = {onAddProductButtonClicked} button2Clicked = {onCancelButtonClicked}  />
              <Body products = {products}/>
              <Footer/>
          </Route>
      </Switch>
       
      </div>
    </Router>
  );
}

export default App;
