import React, { useState, useEffect, useCallback } from 'react';
import blocks from '../utils/blocks';
import BlockItem from './BlockItem';
import Search from './Search';

function BlockList() {
  const [items, setItems] = useState(blocks);
  const [search, setSearch] = useState('');

  const filterBlocks = useCallback(
    (searchText, listOfBlocks) => {
      if (!searchText) {
        return listOfBlocks;
      }
      return listOfBlocks.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    },
    [search]
  );

  useEffect(() => {
    const debounce = setTimeout(() => {
      const foundBlock = filterBlocks(search, blocks);
      setItems(foundBlock);
    }, 300);

    return () => clearTimeout(debounce);
  }, [search, filterBlocks]);

  return (
    <section className="section">
      <Search search={search} setSearch={setSearch} />
      <div className="wrapper-section">
        {items.length ? (
          items.map((item, index) => <BlockItem key={index} item={item} />)
        ) : (
          <div className="dd">No result</div>
        )}
      </div>
    </section>
  );
}

export default BlockList;
