

import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { popularSelectionData } from "../data/menuData";

export default function ItemDetails(){
    const param = useParams()
    const itemIndex = Number(param.id)

    const item = (popularSelectionData[itemIndex])

    return (
      <main className="main">
        {item ? (
          <section className="item-detail-container">
            <img src={`${item.url}`} alt="" />

            <div className="item-detail-text-container">
              <div className="name-price-container">
                <span className="item-name">{item.name}</span>
                <span className="item-price">¥{item.price}</span>
              </div>
              <p className="item-ingredient">
                Ingredients: <i>{item.ingredients}</i>
              </p>
              <p className="item-description">{item.description}</p>
            </div>

            <Link to="/menu" className="button-primary">
              <span>Back to Main Menu</span>
            </Link>
          </section>
        ) : (
          <h2>Loading </h2>
        )}
      </main>
    );
}