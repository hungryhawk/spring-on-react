import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/blocks/blockSlice';

function Search() {
  const { searchTerm } = useSelector((state) => state.blocks);
  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  const [change, setChange] = useState(false);
  const inputEl = React.useRef(null);

  const openInput = () => {
    setChange((prev) => !prev);
    inputEl.current.focus();
  };

  return (
    <div className={`search-wrapper ${change ? 'super' : ''}`}>
      {/* // <div className="search-wrapper super"> */}
      <div className="icon" onClick={openInput}></div>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Search information..."
          value={searchTerm}
          onChange={handleInputValueChange}
          ref={inputEl}
        />
      </div>
    </div>
  );
}

export default Search;
