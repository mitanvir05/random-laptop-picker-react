import { useEffect, useState } from 'react';
import './App.css';
import Card from './card/Card';

function App() {
  const [laptops, setLaptops]=useState([]);
  const [cart , setCart] = useState([]);
  
    const handleAddToCart = (laptop) =>{
      const newCart = [...cart,laptop];
      setCart(newCart);
    };
useEffect(() => {
  fetch("data.json")
  .then((res) => res.json())
  .then((data) => setLaptops(data));
},[]);

  return (
    <div>
      <h1 className='heading'>Random Laptop Picker</h1>
     <div className='cart'>
       <h1>Selected Items</h1>
       {
         cart.map((item) => (
           <h1 key={item.id}>{item.name}</h1>
         ))
       }
       <div>
         <button>Select 1 for me</button>
       </div>
       <div>
         <button>Clear all</button>
       </div>

     </div>
     <div className="card-container">
        {
        laptops.map(laptop => <Card key={laptop.id} laptopData ={laptop}
        handleAddToCart={handleAddToCart}/>)
      }
     </div>
    </div>
  );
}

export default App;
