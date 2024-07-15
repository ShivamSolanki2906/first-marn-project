import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'

function  UpdataProduct() {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams()
  const navegat = useNavigate()

 useEffect(() => {
    getProductDetails()
 },[])

 const getProductDetails =  async () => {
//    console.log(params);
   let result = await fetch (`http://localhost:5000/product/${params.id}`)
   result = await result.json()
//    console.log(result);
setName(result.name)
setprice(result.price)
setCategory(result.category)
setCompany(result.company)

 }
  
 const updateItem =  async () => {
    console.log(name,price,category,company);
    let result = await fetch (`http://localhost:5000/product/${params.id}`,{
        method:"PUT",
        body: JSON.stringify({name,price,category,company}),
        headers: {
            "Content-Type": "application/json",
          },
    })
    result = await result.json()
    console.log(result);
    navegat('/')
 }
  return (
    <>
      <div className="input-warp">
        <p className="page-heading">Update Product</p>
        <div className="input-fild">
          <input
            type="text"
            placeholder="Ente Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
         
          <input
            type="text"
            placeholder="Enter Your price"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
         
          <input
            type="text"
            placeholder="Enter Your category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          
          <input
            type="text"
            placeholder="Enter Your company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          
        </div>
        <div className="signup-btn-wrap">
          <button className="Add-btn" onClick={updateItem}>
            Update Product
          </button>
        </div>
      </div>
    </>
  );
}
export default UpdataProduct;
