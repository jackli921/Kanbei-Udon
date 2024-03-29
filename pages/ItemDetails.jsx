

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
            <div className="item-detail-flex-container">
              <img src={`${item.url}`} alt="" />

              <div className="item-detail-text-container">
                <div className="name-price-container">
                  <h3 className="item-name">{item.name}</h3>
                  <h3 className="item-price">¥{item.price}</h3>
                </div>
                <p className="item-ingredient">
                  Ingredients: <i>{item.ingredients}</i>
                </p>
                <p className="item-description">{item.description}</p>
              </div>
            </div>

            <div className="item-detail-button-container">
              <Link to="/" className="button-primary">
                <span>Back to Home</span>
              </Link>
              <Link to="/menu" className="button-primary">
                <span>Go to Menu</span>
              </Link>
            </div>
          </section>
        ) : (
          <h2>Loading </h2>
        )}
      </main>
    );
}