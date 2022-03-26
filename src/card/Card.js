import React from "react";
import"./Card.css";
import{BsFillCartFill} from "react-icons/bs";
const Card = ({laptopData,handleAddToCart}) => {
    const { name , img ,price} = laptopData;
    return(

        <div className="card">
            <div className="image-container">
                <img src={img} alt=""/>
            </div>

            <h1>Name : {name}</h1>
            <h1> Price : ${price}</h1>
            <div className="add-to-cart">
            <button onClick={()=> handleAddToCart(laptopData)}>Add To Cart<BsFillCartFill/> </button>      
            </div>
        </div>
    )
};

export default Card;