import React from "react";
import { Link } from "react-router-dom";
import { singleItemData } from "../../data/menuData";

export default function Single() {

    const singleItemEl = singleItemData.map((item, index) => {
          return (
            <div key={index} className="item-detail-card-square">
              <img src={`${item.url}`} alt="" />

              <div className="item-detail-text-container">
                <div className="name-price-container">
                  <h3 className="item-name">{item.name}</h3>
                  <h3 className="item-price">¥{item.price}</h3>
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
            {singleItemEl}
        </section>

  
  );
}
