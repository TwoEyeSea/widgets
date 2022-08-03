import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    // OPTION 1 - DEFINING A TEMPORARY FUNCTION TO USE ASYNC/AWAIT:
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    searchWiki();

    // wiki api query string  -> action=query&list=search&format=json&origin=*&srsearch=programming
    // OPTION 2 - REMOVING THE TEMPORARY FUNCTION:
    //   (async () => {
    //   await axios.get("yada");
    // })();

    //OPTION 3 - USING PROMISES:
    //  axios.get("yada")
    //  .then((repose) => {console.log(response.data);
    //  });

    //USING AXIOS WITH useEffect
  }, [term]);
  // The first argument for useEffect() function is the function we want to run, the second argument determines which of the 3 cases to utilize for our useEffect().
  // See section 12 L151 for options and outcomes.

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="inut"
            placeholder="Please enter a search term :)"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
