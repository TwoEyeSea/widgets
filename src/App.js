import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { getValue } from "@testing-library/user-event/dist/utils";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "ou use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

//can use "selected" state with if & else statements to determine classNames to style text colour
// just make a new function and add it to the onClick event listener in the dropDown list
// when you click one of the colour options it will update which className to use.
// define a variable in the function, if  selected state is === to X, the variable = y, return the variable
