// import React, { useState } from 'react';

// function AddToCartForm({ product }) {
//   const [cart, setCart] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setCart(currentCart => [...currentCart, { ...product, quantity }]);
//     setQuantity(1); // reset quantity
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="number" 
//         value={quantity} 
//         onChange={e => setQuantity(e.target.value)} 
//         min="1" 
//         required 
//       />
//       <button type="submit">Add to Cart</button>
//     </form>
//   );
// }
// export default AddToCartForm;