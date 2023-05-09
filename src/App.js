
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';

function App() {
  return (
    <>
      
     {/**/} 
     <Navbar/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/> 
        <Route path='/editProduct/:id' element={<EditProduct/>}/>

       {/*here we are giving id by using id we can edit the product */}
        

        
      </Routes>
      
    </>
  );
}

export default App;
