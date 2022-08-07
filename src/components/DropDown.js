import React, { useState, useEffect, useRef } from "react";
// useState, useEffect and useRef and React hooks

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
        console.log("body click", event.target);
      },
      { capture: true }
    );
  }, []);

  const [toggleMenu, setToggleMenu] = useState("hidden");
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
          console.log("onchange click");
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          ref={ref}
          onClick={() => {
            setOpen(!open);
            console.log("dropdown click");
          }}
          className={`ui selection dropdown ${open ? "visible active" : " "}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
