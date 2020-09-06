import React from 'react';
import './App.css';
const Receipe = ({ receipe }) => {
    return (
        <div className="receipe-items">
            <h1>{receipe.label}</h1>
            <img src={receipe.image} alt="new cook"></img>
            <ol>
                {receipe.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>

    );
}

export default Receipe;

