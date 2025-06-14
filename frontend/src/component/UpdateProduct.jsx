import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
const UpdateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const navigate = useNavigate ()
 const params = useParams();

 useEffect(()=>{
  console.log(params)
  getProductDetail()
 },[])

const getProductDetail = async() => {
  let result = await fetch (`http://localhost:5000/api/siproduct/${params.id}`,
    {
      headers:{
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
    }
  ) ;
  result = await result.json();
  setName(result.name)
  setPrice(result.price)
   setCategory(result.category)
  setCompany(result.company)
}
  const handleUpdateProduct = async() => {
    console.log(name, price, category, company);
    
    let result= await fetch(`http://localhost:5000/api/product/${params.id}`,{
      method:"put",
      body:JSON.stringify({name, price, category, company}),
      headers:{
        'Content-Type':"application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json ()
    console.log (result)
    navigate('/')
  };

  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input
        type='text'
        placeholder='Enter Product Name'
        className='inputBox'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Enter Product Price'
        className='inputBox'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type='text'
        placeholder='Enter Product Category'
        className='inputBox'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type='text'
        placeholder='Enter Product Company'
        className='inputBox'
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button className='signButton' onClick={handleUpdateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;