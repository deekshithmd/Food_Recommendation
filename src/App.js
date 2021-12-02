import React, { useState } from "react";
import "./styles.css";

const indianDictionary = {
  "Masala Dosa": "⭐⭐⭐⭐⭐",
  "Chicken Biriyani": "⭐⭐⭐⭐"
};
const mexicanDictionary = {
  Machacha: "⭐⭐⭐⭐",
  Discada: "⭐⭐⭐",
  Tacos: "⭐⭐⭐⭐⭐"
};
const chineseDictionary = {
  "Quick Noodles": "⭐⭐⭐⭐⭐",
  "Spring Roll": "⭐⭐⭐",
  "Hot and Sour Soup": "⭐⭐⭐⭐"
};
var indiantKeys = Object.keys(indianDictionary);
var mexicanKeys = Object.keys(mexicanDictionary);
var chineseKeys = Object.keys(chineseDictionary);

export default function App() {
  var f1 = "🍟";
  var f2 = "🍝";
  const [food, setFood] = useState("");
  function indianClick() {
    var recipe = indiantKeys.map((item) => {
      return (
        <span key={item}>
          <ul>
            <li>{item}</li>
            <li>{indianDictionary[item]}</li>
          </ul>
        </span>
      );
    });
    setFood(recipe);
  }
  function mexicanClick() {
    var recipe = mexicanKeys.map((item) => {
      return (
        <span key={item}>
          <ul>
            <li>{item}</li>
            <li>{mexicanDictionary[item]}</li>
          </ul>
        </span>
      );
    });
    setFood(recipe);
  }
  function chineseClick() {
    var recipe = chineseKeys.map((item) => {
      return (
        <span key={item}>
          <ul>
            <li>{item}</li>
            <li>{chineseDictionary[item]}</li>
          </ul>
        </span>
      );
    });
    setFood(recipe);
  }
  return (
    <div className="App">
      <h1>
        {f1}Good Foods{f2}
      </h1>
      <p>
        I have rated food of 3 categories, you can select category of your
        choice and look at my rating for different food
      </p>
      <span>
        <button onClick={indianClick}>Indian</button>
        <button onClick={mexicanClick}>Mexican</button>
        <button onClick={chineseClick}>Chinese</button>
        <hr></hr>
      </span>
      <div>{food}</div>
    </div>
  );
}
