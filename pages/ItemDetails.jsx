

import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { menuData } from "./menuData";

export default function ItemDetails(){
    const param = useParams()
    const itemIndex = Number(param.id)

    const item = (menuData[itemIndex])

    return (
      <main className="main">
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
        </section>
      </main>
    );
}