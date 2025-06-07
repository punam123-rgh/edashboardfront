
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',
            {
                headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            }
        )
        result = await result.json();
        setProduct(result);
    }
    console.log(product);


    const deleteProduct = async(id) => {
let result = await fetch(`http://localhost:5000/deleteproduct/${id}`,{
    method:'Delete',
    headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
})
result= await result.json()
if(result){
alert(
    getProducts()  //add new product
)
}
    }

const searchHandle =async (event) => {
let key= event.target.value;
if(key){
let result = await fetch(`http://localhost:5000/search/${key}`,
      {
                headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
result = await result.json();
if(result){
    setProduct(result)
}
}
else{
   getProducts() 
}

} 
    return (
        <div className="product-list">
            <h1> Product List</h1>
            <input className="search-product-Box" type="text" Placeholder="search Box" onChange={searchHandle}/>
            <ul>
                <li>S.No</li>
                <li>name</li>
                <li>
                    price
                </li>
                <li>category</li>
                <li>operation</li>
            </ul>
            { product.length>0 ? product.map((item, index) => 
              
                <ul key={item._id}>
               <ul>
                    <li>{index}</li>
                    <li>{item.name}</li>
                    <li>Nam
                        ${item.price}
                    </li>
                    <li>{item.category}</li>
                    <li><button onClick={() =>deleteProduct(item._id) }>Delete</button>
                <Link to= {'/update/'+item._id}> Update</Link>
                    </li>

                </ul>
                </ul>
                
            ) :<h> product not found</h>
        }
        </div>
    )
}
export default Productlist;