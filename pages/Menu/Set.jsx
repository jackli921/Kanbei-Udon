import React from 'react'
import {Link} from 'react-router-dom'
import { setMealData } from '../../data/menuData'

export default function Set(){



    const setMealEl = setMealData.map((item, index) => {
        return (
          <div key={index} className="item-detail-card-rectangle">
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
    })

//     Katsudon (Pork cutlet & egg)
// Tendon (Shrimp tempura)
// Oyakodon (Chicken & egg)
// 
//   (Prices vary based on selections)

    return (
      <>
        <h3>What is Teishoku?</h3>
        <p className="centered">
          <i>Teishoku</i> means "set meal" or "combo"
          <br />
        </p>
        <section className="what-is-teishoku-section">
          <div>
            <img src="/images/menu/teishoku.png" alt="" />
          </div>

          <>
            <ul>
              <li>
                Choose <strong>Udon or Soba (Hot or Cold) </strong>
              </li>
              <li>
                Choose one rice bowl of your choice
                <ul>
                  <li>
                    <strong>Katsudon</strong> (Pork cutlet & egg)
                  </li>
                  <li>
                    <strong>Tendon</strong> (Shrimp tempura)
                  </li>
                  <li>
                    <strong>Oyakodon</strong> (Chicken & egg)
                  </li>
                  <li>
                    <strong>Tatsuta</strong> (Japanese fried chicken)
                  </li>
                  <li>White rice or chicken rice</li>
                </ul>
              </li>
              <li>
                You can switch the size of your noodle and your rice bowl as
                long as it's
                <strong> one small </strong> + <strong>one regular</strong>)
              </li>
            </ul>
          </>
        </section>
        <br />
        <hr />
        <br />
        <section className="set-meal-card-container">{setMealEl}</section>
      </>
    );
}