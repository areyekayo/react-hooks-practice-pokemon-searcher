import React, {useState} from "react";

function Search({onSearch}) {
  //const [search, setSearch] = useState("");

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
