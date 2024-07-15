import { useState } from "react";
import {useNavigate} from "react-router-dom"

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navegat = useNavigate()

  const addItem = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    // console.log(name, price, category, company);
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, userID }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    navegat('/')

  };
  return (
    <>
      <div className="input-warp">
        <p className="page-heading">Add Product</p>
        <div className="input-fild">
          <input
            type="text"
            placeholder="Ente Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {error && !name && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter Valid Name
            </span>
          )}
          <input
            type="text"
            placeholder="Enter Your price"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
          {error && !price && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter Valid price
            </span>
          )}
          <input
            type="text"
            placeholder="Enter Your category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          {error && !category && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter Valid category
            </span>
          )}
          <input
            type="text"
            placeholder="Enter Your company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          {error && !company && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter Valid company
            </span>
          )}
        </div>
        <div className="add-btn-wrap">
          <button className="Add-btn" onClick={addItem}>
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}
export default AddProduct;
