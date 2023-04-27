import React, { useEffect, useState, useMemo } from 'react';
import BlockItem from './BlockItem';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import { printBlocks } from '../store/blocks/blockSlice';
import useDebounce from '../utils/useDebounce.js';

function BlockList() {
  const { blocksData, loading, success, error, searchTerm } = useSelector(
    (state) => state.blocks
  );
  const dispatch = useDispatch();
  const [blockData, setBlockData] = useState([]);

  useEffect(() => {
    dispatch(printBlocks());

    if (success) {
      setBlockData(blocksData);
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);

  const debouncedSearch = useDebounce(searchTerm, 300);

  const blocks = useMemo(() => {
    if (!searchTerm) return blockData;

    return blockData.filter((block) => {
      return (
        block.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        block.description.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    });
  }, [debouncedSearch, blockData]);

  return (
    <section className="section">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Search />
          <div className="wrapper-section">
            {blocks.length > 0 ? (
              blocks.map((item, index) => <BlockItem key={index} item={item} />)
            ) : (
              <div className="dd">No result</div>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default BlockList;

// const filteredResult = blockData.filter(
//   (block) =>
//     block.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     block.description.toLowerCase().includes(searchTerm.toLowerCase())
// );
