import "./App.css";
import Header from "./Header";
import Login from "./component/Login";
import AddProduct from './component/AddProduct'
import UpdataProduct from './component/UpdataProduct'
// import Register from './component/Register'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Product from "./component/Products";
import Footer from "./Footer";
import SignUp from './component/SignUp'
import PrivateComponent from "./component/PrivateComponent";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route element={<PrivateComponent/>}>
       <Route path="/" element={<Product/> }></Route>
         <Route path="/add" element={<AddProduct/>}></Route>
       
        <Route path="/update/:id" element={<UpdataProduct/>}></Route>
        {/* <Route path="/profile" element={<Register/>}></Route> */}
        </Route>

        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>;
}

export default App;
