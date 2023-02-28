import React from 'react'
import {Link} from 'react-router-dom'
import { setMealData } from '../../data/menuData'

export default function Set(){


    const teishokuStyle ={
        width:"100%",
        borderRadius:"10px"
    }

    const setMealEl = setMealData.map((item, index) => {
        return (
          <div key={index} className="item-detail-container">
            <img src={`${item.url}`} alt="" />

            <div className="item-detail-text-container">
              <div className="name-price-container">
                <span className="item-name">{item.name}</span>
                <span className="item-price">¥{item.price}</span>
              </div>
              <p className="item-description">{item.description}</p>
            </div>
            <p className="item-ingredient">
              Ingredients: <i>{item.ingredients}</i>
            </p>
          </div>
        );
    })

//     Katsudon (Pork cutlet & egg)
// Tendon (Shrimp tempura)
// Oyakodon (Chicken & egg)
// 
//   (Prices vary based on selections)

    const paragraphStyle = {
        paddingTop:"0.5em",
        lineHeight:"1.5"
    }   

    return (
      <>
        <section>
          <h3>What is Teishoku?</h3>
          <img src="/images/menu/teishoku.png" style={teishokuStyle} alt="" />
          <p>
            <i>Teishoku</i> means "set meal" or "combo"
            <br />
          </p>
          <hr />
          <h1>Teishoku Options</h1>
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
            <li style={paragraphStyle}>
              You can switch the size of your noodle and your rice bowl as long
              as it's
              <strong> one small </strong> + <strong>one regular</strong>)
            </li>
          </ul>
        </section>

        {setMealEl}
      </>
    );
}