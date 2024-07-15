import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [productList, setProdctList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  let getProductList = async () => {
    let result = await fetch("http://localhost:5000/products"
        // headers: {
        //     authorization : JSON.parse(localStorage.getItem('token'))
        // }
    );
    result = await result.json();
    setProdctList(result);
  };
  //   console.log("product", productList);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getProductList();
    }
  };

  const searchHandal = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();

      if (result) {
        setProdctList(result);
      }
    } else
    {
        getProductList()
    }
  };

  return (
    <div className="list-item">
      <p className="page-heading">Product Page</p>
      <input
        type="text"
        placeholder="Search Product Name ,Company, Category"
        className="search-box"
        onChange={searchHandal}
      />
      <ul className="item-heading">
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {productList.length > 0 ? productList.map((item, index) => (
        <ul key={item._id} style={{ marginRight: "1.9%" }} className="item-color">
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>

          <button
            style={{ margin: "0% 0.6%" }}
            onClick={() => deleteProduct(item._id)}
            className="delete-btn"
          >
            Delete{" "}
          </button>
          <Link to={"/update/" + item._id}>Update</Link>
        </ul>
       
      ) 
      ) : <h1>Result Not Found</h1> }
    </div>
  );
}

export default Product;
