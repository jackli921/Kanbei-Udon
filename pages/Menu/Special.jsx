import React from "react";
import { Link } from "react-router-dom";
import { specialMenuData } from "../../data/menuData";

export default function Special() {

    const specialMenuEl = specialMenuData.map((item, index) => {
      return (
        <div key={index} className="item-detail-card-square">
          <img src={`${item.url}`} alt="" />

          <div className="item-detail-text-container">
            <div className="name-price-container">
              <span className="item-name">{item.name}</span>
              <span className="item-price">¥{item.price}</span>
            </div>

            <p className="item-ingredient">
              Ingredients: <i>{item.ingredients}</i>
            </p>
            
          </div>
        </div>
      );
    });



  return (
    <section className="set-meal-card-container">
        {specialMenuEl}
        </section>
  );
}
