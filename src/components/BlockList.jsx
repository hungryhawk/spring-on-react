import React, { useEffect } from 'react';
import BlockItem from './BlockItem';
import { useSelector, useDispatch } from 'react-redux';
import { filterByName } from '../store/filterSlice';
import Search from './Search';

function BlockList() {
  const dispatch = useDispatch();
  const { searchTerm, filteredBlocks } = useSelector((state) => state.filter);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(filterByName(searchTerm));
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <section className="section">
      <Search />
      <div className="wrapper-section">
        {filteredBlocks.length ? (
          filteredBlocks?.map((item, index) => (
            <BlockItem key={index} item={item} />
          ))
        ) : (
          <div className="dd">No result</div>
        )}
      </div>
    </section>
  );
}

export default BlockList;
