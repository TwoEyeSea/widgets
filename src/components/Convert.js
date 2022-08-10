import React, { useState, useEffect } from "react";
import axios from "axios"; // don't forget to run npm install within the widgets' (or app your working on) directory

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    // After 500ms the useEffect function runs the setDebouncedText function to change the debouncedText state to === text.
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      // If we enter any other keys again before the setDebouncedText function runs the cleanup function clears the timer
      // and resets the setTimeout function again for another 500 seconds.
      // This prevents network requests from being made until we finish typing everything we need in the input field.
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          // The translate api states to make all requests using query string parameters
          // As such we make specify a third argument containing the params property.
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
