import React from "react";

const Pricing = ({prices}) => {


  const listItems = prices.map((price, index) =>{
  //  Fixme
    return <li> key={index}>{price.level}: £{price:cost}</li>
  });
return (


  <div>
    <h4>Pricing</h4>
  <ul>
    <li>{listitems}</li>
    </ul>
  </div>
);
}

export default Pricing;
