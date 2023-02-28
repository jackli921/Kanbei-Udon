import React from "react";
import { Link } from "react-router-dom";

export default function Notice() {
        const toppingStyle = {
          width: "100%",
          borderRadius: "10px",
        };
  return (
    <>
      <img src="/images/menu/toppings.png" style = {toppingStyle}alt="" />
      <h3>Upgrade your meal with the following options: </h3>
      <ul>
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
    </>
  );
}
