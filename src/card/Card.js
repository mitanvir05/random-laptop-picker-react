import React from "react";
import"./Card.css";
import{BsFillCartFill} from "react-icons/bs";
const Card = ({gunData}) => {
    const { name , img ,bullet,capacity,price} = gunData;
    console.log(gunData);
  
    return(

        <div className="card">
            <div className="image-container">
                <img src={img} alt=""/>
            </div>
            <h1>{name}</h1>
            <p>Bullet : {bullet}</p>
            <p>Capacity : {capacity}</p>
           
            <div className="add-to-cart">
                <button>Add To Cart<BsFillCartFill/> </button>  
                 <h1>${price}</h1>
            </div>
        </div>
    )
};

export default Card;