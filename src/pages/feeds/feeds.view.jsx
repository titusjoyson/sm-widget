import React from 'react';
import ReactList from 'react-list';
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Text,
  Image,
} from '@fluentui/react-northstar';
import './feeds.styles.css';

function FeedCard() {
  return (
    <Card>
      <CardHeader>
        <Flex gap="gap.small">
          <Avatar
            image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
            label="Direct Quality Assistant"
            name="Kurt Abbott"
            status="unknown"
          />
          <Flex column>
            <Text content="Kurt Abbott" weight="bold" />
            <Text content="Direct Quality Assistant" size="small" />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex column gap="gap.small">
          <Image
            src="https://fabricweb.azureedge.net/fabric-website/assets/images/wireframe/square-image.png"
            fluid
          />
          <Text
            content="Quis dignissimos molestiae. Consequatur quibusdam voluptas nihil non. Omnis dolorum alias quae.
          Molestiae expedita cumque perferendis."
          />
        </Flex>
      </CardBody>
    </Card>
  );
}

class FeedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1],
    };
  }

  renderItem = (index, key) => {
    return <FeedCard key={index} />;
  };

  render() {
    const { data } = this.state;

    return (
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          minHeight: '100vh',
          backgroundColor: 'transparent',
        }}
      >
        <ReactList
          itemRenderer={this.renderItem}
          length={data.length}
          // type='variable'
        />
      </div>
    );
  }
}

export default FeedList;
