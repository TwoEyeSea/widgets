import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
// Cloud Translate API Key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState(" ");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input"
            placeholder="Please enter a phrase"
          />
        </div>
      </div>
      <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label={"Select a Language"} />

      <hr />
      <h3>
        <Convert text={text} language={language} />
      </h3>
    </div>
  );
};

export default Translate;
