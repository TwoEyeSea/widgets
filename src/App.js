import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { getValue } from "@testing-library/user-event/dist/utils";
import Translate from "./components/Translate";
import Route from "./components/Route";
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

// useState

export default () => {
  const [selected, setSelected] = useState(options[0]);

  const showAccordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };

  const showSearch = () => {
    if (window.location.pathname === "/list") {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />;
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label={"Select a Colour"} selected={selected} onSelectedChange={setSelected} options={options} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

//can use "selected" state with if & else statements to determine classNames to style text colour
// just make a new function and add it to the onClick event listener in the dropDown list
// when you click one of the colour options it will update which className to use.
// define a variable in the function, if  selected state is === to X, the variable = y, return the variable
