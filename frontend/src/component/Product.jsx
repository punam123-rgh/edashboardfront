import React, { useState } from 'react';
const Product = () => {

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [category, setCategory] = useState('');
   const [company, setCompany] = useState('')
   const [error, setError] = useState('')
   const addProduct = async () => {
      console.log(!name);
      if (!name || !price || !category || !company) {
         setError(true)
         return false;
      }
      console.log(name, price, category, company)
      const userId = JSON.parse(localStorage.getItem('user'))   //convert data in json
      console.log(userId._id);
      let result = await fetch('http://localhost:5000/addproduct', {
         method: 'post',
         body: JSON.stringify({ name, price, category, company, userId }),  //convert data in string 
         headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
         }
      })
      result = await result.json(); //convert data in json  to read
      console.log(result);
   }
   return (
      <div className='product'>
         <h1>Add Product</h1>
         <input type='text' placeholder='Enter Product Name' className='inputBox' value={name} onChange={(e) => setName(e.target.value)} />
         {error && !name && <span className='invalidinput'>Enter Valid Name</span>}

         <input type='text' placeholder='Enter Product Price' className='inputBox' value={price} onChange={(e) => setPrice(e.target.value)} />
         {error && !price && <span className='invalidinput'>Enter Valid Price</span>}
         <input type='text' placeholder='Enter Product category' className='inputBox' value={category} onChange={(e) => setCategory(e.target.value)} />
         {error && !category && <span className='invalidinput'>Enter Valid Category</span>}
         <input type='text' placeholder='Enter Product company' className='inputBox' value={company} onChange={(e) => setCompany(e.target.value)} />
         {error && !company && <span className='invalidinput'>Enter Valid Company</span>}

         <button className='signButton' onClick={addProduct}>Add Product</button>
      </div>
   )
}
export default Product;