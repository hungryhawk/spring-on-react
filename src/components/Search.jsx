import React, { useState, useRef } from 'react';

function Search({ search, setSearch }) {
  const [change, setChange] = useState(false);
  const inputEl = useRef(null);

  const openInput = () => {
    setChange((prev) => !prev);
    inputEl.current.focus();
  };

  return (
    <div className={`search-wrapper ${change ? 'super' : ''}`}>
      <div className="icon" onClick={openInput}></div>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Search information..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputEl}
        />
      </div>
    </div>
  );
}

export default Search;
