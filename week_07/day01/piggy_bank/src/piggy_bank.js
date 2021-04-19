import React, {Fragment, useState} from "react";

const PiggyBank = ({title, amount}) => {

    const [total, setTotal] = useState(0);

    // const amount = 25;
   
    const deposit = () => {
        setTotal(total + amount);
        }
    
    const withdraw = () => {
        if (total >= amount) {
        setTotal(total - amount);
        } else {
        setTotal(total);
        };
    }


    return (
        <>
        <h1>{title}</h1>
        <p>Current Total: {total} </p>
        {/* Wrapping the deposit function in arrow function will stop the function from running until the button is clicked */}
        <button onClick={() => {deposit()}}>Deposit</button>
        <button onClick={() => {withdraw()}}>Withdraw</button>
        </>
    )
}

export default PiggyBank;