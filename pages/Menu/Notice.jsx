import React from "react";
import { Link } from "react-router-dom";

export default function Notice() {

  return (
    <div className="notice-container">
      <img
        className="notice-image"
        src="/images/menu/toppings.png"
        alt=""
      />

      <div>
        <h3>Upgrade your meal with the following: </h3>
        <ul className="notice-topping-container">
          <li>
            Plus ¥110 for <strong>large noodle portion</strong>
          </li>
          <li>
            Plus ¥80 for <strong>black noodles</strong>{" "}
          </li>
          <li>
            <strong>Additional toppings</strong> include:
            <ul>
              <li>Wakeme seaweed (¥110)</li>
              <li>Deep-fried tofu(¥110)</li>
              <li>Burdock tempura(¥110)</li>
              <li>Shrimp tempura(¥110)</li>
              <li>Japanese fried chicken(¥150)</li>
              <li>Beef (¥220)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
