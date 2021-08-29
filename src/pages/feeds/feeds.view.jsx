import React from 'react';
import ReactList from 'react-list';
import { Flex } from '@fluentui/react-northstar';
// import AddFeedCard from '../../components/card/AddFeedCard';
import FeedCard from '../../components/card/FeedCard';
import * as tada from '../../clients/twitter';
import './feeds.styles.css';

const renderItem = (index, key) => {
  return <FeedCard key={index} />;
};

function FeedList() {
  const data = [1, 2];

  return (
    <Flex column>
      {/* <AddFeedCard /> */}
      <div
        style={{
          overflowY: 'auto',
          height: '100vh',
        }}
      >
        <ReactList
          itemRenderer={renderItem}
          length={data.length}
          type="variable"
        />
      </div>
    </Flex>
  );
}

export default FeedList;
